import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { JobService } from './services/job.service';
import * as data from '../assets/dummy.json';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith, switchMap, tap } from 'rxjs/operators';
import moment from 'moment';
import { HttpClient } from '@angular/common/http';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import * as svgMarkup from './svg-markup';
import { NavigationEnd, Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';
import { drawerTextAnimation } from './shared/components/nav-drawer/nav-animations';
import { DrawerMode, MiNavDrawerComponent } from './shared/components/mi-nav-drawer/mi-nav-drawer.component';
import { AuthService } from './auth/auth.service';

interface JobSearch {
  job_title: string
}
interface CitySearch {
  city: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [drawerTextAnimation]
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit {
  navigationList = [
    { title: 'Overview', route: '/home', icon: svgMarkup.svgMarkup[1], needsAuth: false },
    { title: 'Jobs', route: '/jobs', icon: svgMarkup.svgMarkup[4], needsAuth: false },
    { title: 'Courses', route: 'courses', icon: svgMarkup.svgMarkup[0], needsAuth: true },
    { title: 'User', route: '/user', icon: svgMarkup.svgMarkup[3], needsAuth: true },
    // { title: 'login', route: '/login', icon: svgMarkup.svgMarkup[4] },
    { title: 'login', route: '/saved', icon: svgMarkup.svgMarkup[2], needsAuth: false }

  ]
  @ViewChild('svgInit', { static: true }) svgInit!: ElementRef<SVGElement>;
  @ViewChild('elRef', { static: true }) elRef: ElementRef<HTMLHeadingElement> = {} as ElementRef;
  @ViewChild('btnContainer', { static: true }) btnContainer!: ElementRef<HTMLElement>;
  @ViewChild('drawer', { read: 'test' }) drawer!: MiNavDrawerComponent;
  @ViewChild('insideDrawer', { read: 'test' }) insideDrawer!: MiNavDrawerComponent;



  mode: DrawerMode = 'side';
  insideMode: DrawerMode = 'over';
  insidePosition: 'start' | 'end' = 'end';
  filteredOptions!: Observable<JobSearch[]>;
  cityFilteredOptions!: Observable<CitySearch[]>
  myControl = new FormControl();
  cityControl = new FormControl();
  minInputted = 0;
  maxInputted = 1;
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  showFiller = false;
  full: string = 'full';

  register = true;



  // jobData = this.jobservice.getJobs();

  // registerData = {
  //   email: 'meme@email.com',
  //   password: 'password'
  // }

  // data = this.http.post('http://localhost:3000/ap,i/v1/auth/register', this.registerData).subscribe(el => console.log(el))

  constructor(private jobservice: JobService,
    private http: HttpClient,
    private authService: AuthService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    console.log(this.mobileQuery);
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }
  changeTemplate(): void {
    this.register = false;
  }
  onRouterLinkActive(event: any) {
    console.log(event)
  }

  isLoggedIn() {
    if (!this.authService.isLoggedIn()) {
      this.insideDrawer.open()
    }
  }

  closeDrawer() {
    this.insideDrawer.close()
  }

  ngOnInit() {

    // let now = moment().add()
    // console.log(now);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      switchMap(el => this.jobservice.searchFetch(el))
    );

    this.cityFilteredOptions = this.cityControl.valueChanges.pipe(
      switchMap(el => this.jobservice.searchCityFetch(el))
    )

    this.router.events.subscribe(el => {
      // console.log(el.url.includes(''));
      // this.drawer.nativeElement.
      if (el instanceof NavigationEnd && el.url.includes('/jobs') && this.drawer.opened) {
        console.log('is this nav end called?')
        // this.drawer.nativeElement.close()/
        this.drawer.close()
        // this.navMover =
      } if (el instanceof NavigationEnd && !el.url.includes('/jobs') && this.drawer.opened !== true) {
        this.drawer.open()
      }
    })
    // console.log(this.svgInit);
    // let paths = this.svgInit.nativeElement.querySelectorAll('path');

    // for (let i = 0; i < paths?.length; i++) {
    //   console.log(`icons ${i} is ${paths[i].getTotalLength()}`)
    // }
    this.router.events.subscribe((ev) => {
      if (ev instanceof NavigationEnd && ev.url === '/user') {
        // this.full = 'min';
        this.btnContainer.nativeElement.dataset.state = 'min'
        console.log('from user: ', ev, this.btnContainer.nativeElement.dataset.state)

      } else {
        this.full = 'full';
      }
    })
  }

  ngAfterViewInit() {

  }
  getData() {
    this.jobservice.fetched(data).subscribe(el => console.log(el))
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }

  // private _getIT(val:string): Observable <string[]> {
  //   const filter = val.toLocaleLowerCase()
  //   return this.jobservice.searchFetch(filter);
  // }
}
