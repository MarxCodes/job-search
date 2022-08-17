import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { AfterViewInit, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnDestroy, OnInit, AfterViewInit {

  navigationList = [
    { title: 'Dashboard', svg: 'tune', route: '/user/dashboard'},
    { title: 'Saved Jobs', svg: 'star_rate', route: '/user/saved'},
    { title: 'Your Jobs', svg: 'backup', route: '/user/upload'},
    { title: 'Applications', svg: 'source', route: '/applications'},
    { title: 'Settings', svg: 'settings', route: '/settings'},
  ];

  @ViewChild(MatSidenav) sideNav!: MatSidenav;
  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(private observer: BreakpointObserver, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 800px)');
    console.log(this.mobileQuery);
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this._mobileQueryListener);
  }
  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.observer.observe(['(max-width: 800px)']).subscribe(
      res => {
        if(res.matches) {
          this.sideNav.mode = 'over';

          this.sideNav.close();
        } else {
          this.sideNav.mode = 'side';
          this.sideNav.open()
        }
      }
    )
  }



}
