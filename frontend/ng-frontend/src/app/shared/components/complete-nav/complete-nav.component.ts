import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { CdkScrollable, ViewportRuler } from '@angular/cdk/scrolling';
import { AfterContentInit, ChangeDetectorRef, Component, ContentChild, ContentChildren, ElementRef, Inject, InjectionToken, Input, NgZone, OnInit, Optional, QueryList, ViewChild } from '@angular/core';
// import { MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY } from '@angular/material/sidenav';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { Subject } from 'rxjs';
import { startWith, takeUntil } from 'rxjs/operators';
import { NavDrawerComponent } from '../nav-drawer/nav-drawer.component';
import { NavMainContentComponent } from '../nav-main-content/nav-main-content.component';

export const NAV_DRAWER_CONTAINER = new InjectionToken('NAV_DRAWER_CONTAINER');

export const MAT_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken<boolean>(
  'MAT_DRAWER_DEFAULT_AUTOSIZE',
  {
    providedIn: 'root',
    factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY,
  },
);

/**
 * Used to provide a drawer container to a drawer while avoiding circular references.
 * @docs-private
 */
export const MAT_DRAWER_CONTAINER = new InjectionToken('MAT_DRAWER_CONTAINER');

/** @docs-private */
export function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY(): boolean {
  return false;
}

@Component({
  selector: 'app-complete-nav',
  templateUrl: './complete-nav.component.html',
  styleUrls: ['./complete-nav.component.scss'],
  host: {
    'class': 'app-complete-nav',
    '[class.app-complete-nav-explicit-backdrop]': '_backdropOverride',
  },
  exportAs: 'CompleteNavComponent',
  providers: [
    {
      provide: NAV_DRAWER_CONTAINER,
      useExisting: CompleteNavComponent
    }
  ]
})
export class CompleteNavComponent implements OnInit, AfterContentInit {

  // Guide to Nav.
  // 1) create container component that adjusts margins to content component
  // 2) on route change make nav 'min'
  // 3) listen to animationStart/End
  // 4) state of nav min/max/hidden(for mobiles)
  // 5)
  @ContentChildren(NavDrawerComponent, {
    descendants: true
  })
  _allDrawers!: QueryList<NavDrawerComponent>;
  _drawers = new QueryList<NavDrawerComponent>();

  @ContentChild(NavMainContentComponent)
  _content!: NavMainContentComponent;

  @ViewChild(NavMainContentComponent)
  _userContent!: NavMainContentComponent;

  // @Input() get hasBackdrop(): boolean {
  //   if (this._backdropOverride == null) {
  //     // return;
  //     // if on mobile size then add backdrop??
  //   }
  //   return this._backdropOverride;
  // }

  set hasBackdrop(value: BooleanInput) {
    this._backdropOverride = value == null ? null : coerceBooleanProperty(value)
  }

  _backdropOverride!: boolean | null;

  private _leftDrawer!: NavDrawerComponent | null;
  /** Emits when the component is destroyed. */
  private readonly _destroyed = new Subject<void>();

  /** Emits on every ngDoCheck. Used for debouncing reflows. */
  private readonly _doCheckSubject = new Subject<void>();
  /**
   * Margins to be applied to the content. These are used to push / shrink the drawer content when a
   * drawer is open. We use margin rather than transform even for push mode because transform breaks
   * fixed position elements inside of the transformed element.
   */
  _contentMargins: { left: number | null; right: number | null } = { left: null, right: null };
  readonly _contentMarginChanges = new Subject<{ left: number | null; right: number | null }>();
  private _autosize: boolean;

  get scrollable(): CdkScrollable {
    return this._userContent || this._content;
  }
  constructor(
    private _ngZone: NgZone,
    private _element: ElementRef<HTMLElement>,
    private _changeDetectorRef: ChangeDetectorRef,
    viewportRuler: ViewportRuler,
    @Inject(MAT_DRAWER_DEFAULT_AUTOSIZE) defaultAutosize = false,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) private _animationMode?: string,

  ) {
    viewportRuler
      .change()
      .pipe(takeUntil(this._destroyed))
      .subscribe(() => this.updateContentMargins())

    this._autosize = defaultAutosize;

  }
  ngAfterContentInit() {
    this._allDrawers.changes
      .pipe(startWith(this._allDrawers), takeUntil(this._destroyed))
      .subscribe((drawer: QueryList<NavDrawerComponent>) => {
        this._drawers.reset(drawer.filter(item => !item._container || item._container === this));
        this._drawers.notifyOnChanges()
      });

    this._drawers.changes.pipe(startWith(null)).subscribe(() => {
      // this._validateDrawers();

      this._drawers.forEach((drawer: NavDrawerComponent) => {
        // this._watchDrawerToggle(drawer)
        // this._watchDrawerPosition(drawer);
        // this._watchDrawerMode(drawer);
      });

      // if(!this._drawers.length || this.isDrawerOpen())
    })
    console.log(this._content)

  }
  ngOnInit(): void {
  }

  open(): void {
    this._drawers.forEach(drawer => drawer.open());
  }
  close(): void {
    this._drawers.forEach(drawer => drawer.close());
  }

  updateContentMargins() {
    let left = 0, right = 0;

    if (this._leftDrawer && this._leftDrawer.opened) {
      left += this._leftDrawer._getWidth();
    }

    left = left || null!;

    if (left !== this._contentMargins.left) {
      this._contentMargins = { left, right };

      this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins))
    }
  }

}
