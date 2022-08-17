import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Inject, InjectionToken, NgZone, AfterContentInit, ViewEncapsulation } from '@angular/core';
// import { MatDrawerContainer } from '@angular/material/sidenav';
import { CompleteNavComponent } from '../complete-nav/complete-nav.component';
// import { MatDrawerContainer } from '@angular/material/sidenav';
export const NAV_DRAWER_CONTAINER = new InjectionToken('NAV_DRAWER_CONTAINER');

@Component({
  selector: 'app-nav-main-content',
  // templateUrl: './nav-main-content.component.html',
  template: '<ng-content></ng-content>',
  styleUrls: ['./nav-main-content.component.scss'],
  host: {
    'class': 'app-nav-main-content',
    '[style.margin-left.px]': '_container._contentMargins.left',
    '[style.margin-right.px]': '_container._contentMargins.right',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CdkScrollable,
      useExisting: NavMainContentComponent,
    }]
})
export class NavMainContentComponent extends CdkScrollable implements AfterContentInit {

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    elementRef: ElementRef<HTMLElement>,
    scrollDispatcher: ScrollDispatcher,
    ngZone: NgZone,
    @Inject(forwardRef(() => CompleteNavComponent)) public _container: CompleteNavComponent,
  ) {
    super(elementRef, scrollDispatcher, ngZone)

  }

  // ngOnInit(): void {
  // }
  ngAfterContentInit() {
    this._container._contentMarginChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }
}
