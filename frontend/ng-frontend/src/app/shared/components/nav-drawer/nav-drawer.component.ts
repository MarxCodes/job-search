import { FocusOrigin } from '@angular/cdk/a11y';
import { Component, Inject, InjectionToken, OnInit, Optional, Output, EventEmitter, Input, ElementRef, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AnimationEvent } from '@angular/animations';
import { Subject } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { CompleteNavComponent } from '../complete-nav/complete-nav.component';
import { DrawerAnimations } from './nav-animations';
// import { MAT_DRAWER_CONTAINER } from '../complete-nav/complete-nav.component';

// export const MAT_DRAWER_CONTAINER = new InjectionToken('MAT_DRAWER_CONTAINER');
export const NAV_DRAWER_CONTAINER = new InjectionToken('NAV_DRAWER_CONTAINER');


// result of toggle promise that indicates state of the drawer
// export type DesktopToggleResult = 'max' | 'min' ;
// export type MobileToggleResult = 'max' | 'close';
export type DrawerToggleResult = 'open' | 'close';

/*
THINGS TO CONSIDER
listen to route changes and on '/jobs' transition nav to 'min'
nav container needs to know the vp width

set to string 'max' for all instances but jobs and mobile.
if width < 768px, {nav = 'none'},
if route === '/jobs' nav = 'min'
else { nav = 'max' }

In mobile mode open to
*/
@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.scss'],
  host: {
    '[@transform]': '_animationState',
    '(@transform.start)': '_animationStarted.next($event)',
    '(@transform.done)': '_animationEnd.next($event)',
  },
  animations: [
    DrawerAnimations
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class NavDrawerComponent implements OnInit {
  daRoute: any;
  @Input() get opened(): boolean {
    return this._opened;
  }

  set opened(value: boolean) {
    this.toggle(value)
  }

  private _opened: boolean = true;

  /** Emits whenever the drawer has started animating. */
  readonly _animationStarted = new Subject<AnimationEvent>();

  /** Emits whenever the drawer is done animating. */
  readonly _animationEnd = new Subject<AnimationEvent>();

  _animationState: 'open' | 'void' | 'min' = 'open';

  private _enableAnimations = false;

  @Output() readonly openChange: EventEmitter<string> = new EventEmitter<string>();

  @Output('open') readonly _openedStream = this.openChange.pipe(
    filter(o => o !== o),
    map(() => { })
  )
  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private router: Router,
    @Optional() @Inject(NAV_DRAWER_CONTAINER) public _container?: CompleteNavComponent,
  ) {
    this.router.events.subscribe(navUrl => {
      this.daRoute = navUrl
    })
  }

  ngOnInit(): void {
  }
  ngAfterContentChecked() {
    // Enable the animations after the lifecycle hooks have run, in order to avoid animating
    // drawers that are open by default. When we're on the server, we shouldn't enable the
    // animations, because we don't want the drawer to animate the first time the user sees
    // the page.
    // if (this._platform.isBrowser) {
    //   this._enableAnimations = true;
    // }
  }
  //open the drawer
  //openedVia whether opened by keypress/mouse click/programmatically

  open(openedVia?: FocusOrigin): Promise<DrawerToggleResult> {
    return this.toggle(true, openedVia);
  }

  close() { }

  // _setNav(str: string) {
  //   this.router.events.subscribe((ev) => {
  //     if (ev instanceof NavigationEnd && ev.url === '/user') {
  //       // this.full = 'min';
  //       this.btnContainer.nativeElement.dataset.state = 'min'
  //       console.log('from user: ', ev, this.btnContainer.nativeElement.dataset.state)

  //     } else {
  //       this.full = 'full';
  //     }
  //   })
  //   if(this.router.)
  // }

  toggle(isOpen: boolean, openedVia?: FocusOrigin): Promise<DrawerToggleResult> {
    if (isOpen && openedVia) {
      // this._openedVia = openedVia;
    }
    const result = this._setOpen(
      isOpen,
      // !isOpen && this._isFousWithinDrawer(),
      // this.
    )
    return result;
  }

  // private _isFocusWithinDrawer(): boolean {
  //   const activeEl = this._doc.activeElement;
  //   return !!activeEl && this._elementRef.nativeElement.contains(activeEl);
  // }

  private _setOpen(
    isOpen: boolean): Promise<DrawerToggleResult> {
    this._opened = isOpen;

    // if (isOpen ) {
    if (!isOpen && this.daRoute instanceof NavigationEnd && this.daRoute.url !== '/jobs') {
      this._animationState = 'min'
    }
    if (isOpen) {
      this._animationState = 'open'
    }
    // this._animationState =  'open';
    // }
    else {
      this._animationState = 'void';
    }

    return new Promise<DrawerToggleResult>(resolve => {
      this.openChange.pipe(take(1)).subscribe(open => resolve(open ? 'open' : 'close'))
    })
  }


  _getWidth(): number {
    return this._elementRef.nativeElement ? this._elementRef.nativeElement.offsetWidth || 0 : 0;
  }
}
