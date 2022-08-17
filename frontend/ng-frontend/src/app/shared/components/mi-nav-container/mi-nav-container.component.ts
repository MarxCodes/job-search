import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  Inject,
  InjectionToken,
  OnDestroy,
  NgZone,
  AfterContentInit,
  QueryList,
  ViewChild,
  Optional,
  Input,
  EventEmitter,
  Output
} from '@angular/core';
import { merge, of, Subject } from 'rxjs';
import { MiNavContentComponent } from '../mi-nav-content/mi-nav-content.component';
// import { MiNavDrawerComponent } from '../nav-drawer/nav-drawer.component';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { CdkScrollable, ViewportRuler } from '@angular/cdk/scrolling';
import { BreakpointObserver, MediaMatcher } from '@angular/cdk/layout';
import { takeUntil, startWith, filter, debounceTime, tap } from 'rxjs/operators';
import { AnimationEvent } from '@angular/animations';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import { NAV_DRAWER_CONTAINER } from '../../vars';
import { Directionality } from '@angular/cdk/bidi';
import { MiNavDrawerComponent } from '../mi-nav-drawer/mi-nav-drawer.component';

export const MAT_DRAWER_DEFAULT_AUTOSIZE = new InjectionToken<boolean>(
  'MAT_DRAWER_DEFAULT_AUTOSIZE',
  {
    providedIn: 'root',
    factory: MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY,
  },
);
export function MAT_DRAWER_DEFAULT_AUTOSIZE_FACTORY(): boolean {
  return false;
}
@Component({
  selector: 'app-mi-nav-container',
  templateUrl: './mi-nav-container.component.html',
  styleUrls: ['./mi-nav-container.component.scss'],
  exportAs: 'MiNavContainerComponent',
  host: {
    'class': 'app-nav-container',
    '[class.mat-drawer-container-explicit-backdrop]': '_backdropOverride',
  },
  providers: [
    {
      provide: NAV_DRAWER_CONTAINER,
      useExisting: MiNavContainerComponent
    }
  ]
})
export class MiNavContainerComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(MiNavDrawerComponent) _allDrawers!: QueryList<MiNavDrawerComponent>;
  _drawers = new QueryList<MiNavDrawerComponent>();
  @ContentChild(MiNavContentComponent)
  _content!: MiNavContentComponent;

  @ViewChild(MiNavContentComponent)
  _userContent!: MiNavContentComponent;

  mobileQuery!: MediaQueryList;

  @Input() get hasBackdrop(): boolean {
    if (this._backdropOverride == null) {
      return !this._start || this._start.mode !== 'side' || !this._end || this._end.mode !== 'side';
    }
    return this._backdropOverride;
  }
  set hasBackdrop(value: BooleanInput) {
    this._backdropOverride = value == null ? null : coerceBooleanProperty(value);
  }

  get start(): MiNavDrawerComponent | null {
    return this._start;
  }

  get end(): MiNavDrawerComponent | null {
    return this._end;
  }

  private _start!: MiNavDrawerComponent | null;
  private _end!: MiNavDrawerComponent | null;
  // private _left: MiNavDrawerComponent | null;
  // private _right: MiNavDrawerComponent | null;


  @Input()
  get autosize(): boolean {
    return this._autosize;
  }
  set autosize(value: BooleanInput) {
    this._autosize = coerceBooleanProperty(value);
  }
  // private _autosize: boolean;
  _backdropOverride!: boolean | null;
  @Output() readonly backdropClick: EventEmitter<void> = new EventEmitter<void>();

  private _left!: MiNavDrawerComponent | null;
  private _right!: MiNavDrawerComponent | null;
  /** Emits when the component is destroyed. */
  private readonly _destroyed = new Subject<void>();

  /** Emits on every ngDoCheck. Used for debouncing reflows. */
  private readonly _doCheckSubject = new Subject<void>();
  /**
   * Margins to be applied to the content. These are used to push / shrink the drawer content when a
   * drawer is open. We use margin rather than transform even for push mode because transform breaks
   * fixed position elements inside of the transformed element.
   */
  _contentMargins: { left: number | undefined; right: number | undefined } = { left: undefined, right: undefined };
  readonly _contentMarginChanges = new Subject<{ left: number | undefined; right: number | undefined }>();
  private _autosize: boolean;

  get scrollable(): CdkScrollable {
    return this._userContent || this._content;
  }

  mobileView = false;

  constructor(
    @Optional() private _dir: Directionality,
    private _ngZone: NgZone,
    private _element: ElementRef<HTMLElement>,
    private _changeDetectorRef: ChangeDetectorRef,
    private observer: BreakpointObserver,
    private media: MediaMatcher,
    viewportRuler: ViewportRuler,

    @Inject(MAT_DRAWER_DEFAULT_AUTOSIZE) defaultAutosize = false,
    @Optional() @Inject(ANIMATION_MODULE_TYPE) private _animationMode?: string
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 768px)');
    if (_dir) {
      _dir.change.pipe(takeUntil(this._destroyed)).subscribe(() => {
        this._validateDrawers();
        this.updateContentMargins();
      })
    }

    viewportRuler
      .change()
      .pipe(takeUntil(this._destroyed))
      .subscribe((tap) => {
        this.updateContentMargins();
      })

    this._autosize = defaultAutosize;

  }
  ngAfterContentInit() {
    this.observer.observe(['(max-width: 768px)']).subscribe(
      res => {
        if (res.matches) {
          this.mobileView = true;
        }
      }
    )
    // console.log('nav conent', this._content)
    this._allDrawers.changes
      .pipe(startWith(this._allDrawers), takeUntil(this._destroyed))

      .subscribe((drawer: QueryList<MiNavDrawerComponent>) => {
        this._drawers.reset(drawer.filter(item => !item._container || item._container === this));
        this._drawers.notifyOnChanges();
        // this.updateContentMargins()
      });

    this._drawers.changes
      .pipe(
        startWith(null))
      .subscribe(() => {
        this._validateDrawers();

        this._drawers.forEach((drawer: MiNavDrawerComponent) => {
          this._watchDrawerToggle(drawer);
          this._watchDrawerPosition(drawer);
          this._watchDrawerMode(drawer);
        });

        if (
          !this._drawers.length ||
          this._isDrawerOpen(this._start) ||
          this._isDrawerOpen(this._end)
        ) {
          this.updateContentMargins();
        }

        this._changeDetectorRef.markForCheck();
      });

    // Avoid hitting the NgZone through the debounce timeout.
    this._ngZone.runOutsideAngular(() => {
      this._doCheckSubject
        .pipe(
          debounceTime(10), // Arbitrary debounce time, less than a frame at 60fps
          takeUntil(this._destroyed),
        )
        .subscribe(() => { this.updateContentMargins() });
    });

  }


  ngOnDestroy() {
    this._contentMarginChanges.complete();
    this._doCheckSubject.complete()
    this._drawers.destroy();
    this._destroyed.next();
    this._destroyed.complete();
  }

  open(): void {
    this._drawers.forEach(drawer => drawer.open());
  }
  close(): void {
    this._drawers.forEach(drawer => drawer.close());
  }

  updateContentMargins(str: string = '') {
    let leftDecider = this._start?.containerView === 'large' ? this._start.lWidth.offsetWidth : this._start?.sWidth.offsetWidth;

    let left = leftDecider, right = 0;

    if (this._left && this._left.opened) {
      left = this._left._getWidth();

    }

    if (this._left && this.mobileView) {
      left = 0;
    }

    if (left !== this._contentMargins.left) {
      this._contentMargins = { left, right };

      this._ngZone.run(() => this._contentMarginChanges.next(this._contentMargins))
    }
  }


  ngDoCheck() {
    // If users opted into autosizing, do a check every change detection cycle.
    if (this._autosize && this._isPushed()) {
      // Run outside the NgZone, otherwise the debouncer will throw us into an infinite loop.
      this._ngZone.runOutsideAngular(() => this._doCheckSubject.next());
    }
  }


  private _watchDrawerToggle(drawer: MiNavDrawerComponent): void {
    drawer._animationStarted
      .pipe(
        filter((event: AnimationEvent) => event.fromState !== event.toState),
        takeUntil(this._drawers.changes),
      )
      .subscribe((event: AnimationEvent) => {
        // Set the transition class on the container so that the animations occur. This should not
        // be set initially because animations should only be triggered via a change in state.
        if (this._animationMode !== 'NoopAnimations') {
          this._element.nativeElement.classList.add('mat-drawer-transition');
        }

        this.updateContentMargins('watchdrawer');

        this._changeDetectorRef.markForCheck();

        drawer.openedChange
          .pipe(takeUntil(this._drawers.changes))
          .subscribe(() => {
            this._setContainerClass(drawer.opened)
            // this._toggleTextClass(drawer.opened)
          });
      });

  }
  private _isDrawerOpen(drawer: MiNavDrawerComponent | null): drawer is MiNavDrawerComponent {
    return drawer != null && drawer.opened;
  }
  private _validateDrawers() {
    this._start = this._end = null;

    this._drawers.forEach(drawer => {
      if (drawer.position == 'end') {
        if (this._end != null) {
          // throwDuplicateDrawerError('end')
        }
        this._end = drawer;
      } else {
        if (this._start != null) {
          // throwDuplicateDrawerError('start');
        }
        this._start = drawer
      }
    });

    this._left = this._start;
    this._right = this._end
  }

  private _watchDrawerPosition(drawer: MiNavDrawerComponent): void {
    if (!drawer) {
      return;
    }
  }

  private _watchDrawerMode(drawer: MiNavDrawerComponent): void {
    if (drawer) {
      drawer._modeChanged
        .pipe(takeUntil(merge(this._drawers.changes, this._destroyed)))
        .subscribe(() => {
          this.updateContentMargins();
          this._changeDetectorRef.markForCheck();
        });
    }
  }

  private _isPushed() {
    return (
      (this._isDrawerOpen(this._start) && this._start.mode != 'over') ||
      (this._isDrawerOpen(this._end) && this._end.mode != 'over')
    );
  }
  _onBackdropClicked() {
    this.backdropClick.emit();
    this._closeModalDrawersViaBackdrop();
  }

  _closeModalDrawersViaBackdrop() {
    // Close all open drawers where closing is not disabled and the mode is not `side`.
    [this._start, this._end]
      .filter(drawer => drawer && !drawer.disableClose && this._canHaveBackdrop(drawer))
      .forEach(drawer => drawer!._closeViaBackdropClick());
  }
  _isShowingBackdrop(): boolean {
    return (
      (this._isDrawerOpen(this._start) && this._canHaveBackdrop(this._start)) ||
      (this._isDrawerOpen(this._end) && this._canHaveBackdrop(this._end))
    );
  }

  private _canHaveBackdrop(drawer: MiNavDrawerComponent): boolean {
    return drawer.mode !== 'side' || !!this._backdropOverride;
  }



  private _setContainerClass(isAdd: boolean): void {
    const classList = this._element.nativeElement.classList;
    const className = 'mat-drawer-container-has-open';

    if (isAdd) {
      classList.add(className);
    } else {
      classList.remove(className)
    }
  }

  private _toggleTextClass(isAdd: boolean): void {
    const classList = this._left?._content.nativeElement.classList;
    const className = 'hide-el';
    if (!isAdd) {
      classList?.add(className);
      console.log('should be added?')
    } else {
      classList?.remove(className)
    }
  }
}
