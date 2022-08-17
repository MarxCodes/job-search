import { AfterContentChecked, AfterContentInit, AfterViewInit, ChangeDetectionStrategy, Component, ContentChild, ElementRef, EventEmitter, forwardRef, Inject, InjectionToken, Input, NgZone, OnDestroy, OnInit, Optional, Output, QueryList, ViewChild, ViewEncapsulation } from '@angular/core';
import { fromEvent, Observable, Subject } from 'rxjs';
import { filter, map, mapTo, distinctUntilChanged, take, takeUntil, first } from 'rxjs/operators';
export type DrawerToggleResult = 'open' | 'close';
import { AnimationEvent } from '@angular/animations';
import { Router } from '@angular/router';
import { Platform } from '@angular/cdk/platform';
import { DOCUMENT } from '@angular/common';
import { ESCAPE, F, hasModifierKey } from '@angular/cdk/keycodes';

// import { NAV_DRAWER_CONTAINER } from 'src/app/app.module';
// import { NAV_DRAWER_CONTAINER } from '../nav-container/nav-container.component';
// export const NAV_DRAWER_CONTAINER = new InjectionToken('NAV_DRAWER_CONTAINER');
import { NAV_DRAWER_CONTAINER } from '../../vars';
export type DrawerMode = 'over' | 'push' | 'side'; import { DrawerAnimations } from './drawer-animation';
import { MiNavContainerComponent } from '../mi-nav-container/mi-nav-container.component';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';

@Component({
  selector: 'app-mi-nav-drawer',
  templateUrl: './mi-nav-drawer.component.html',
  styleUrls: ['../mi-nav-container/mi-nav-container.component.scss'],
  animations: [DrawerAnimations.transformDrawer],
  host: {
    'class': 'app-mi-nav-drawer',
    '[attr.align]': 'null',
    '[class.mat-drawer-end]': 'position === "end"',
    '[class.mat-drawer-over]': 'mode === "over"',
    '[class.mat-drawer-push]': 'mode === "push"',
    '[class.mat-drawer-side]': 'mode === "side"',
    '[class.mat-drawer-opened]': 'opened',
    'tabIndex': '-1',
    '[@transform]': '_animationState',
    '(@transform.start)': '_animationStarted.next($event)',
    '(@transform.done)': '_animationEnd.next($event)',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'MiNavDrawerComponent',
  providers: [
    {
      provide: 'test', useExisting: forwardRef(() => MiNavDrawerComponent)
    }
  ]
})
export class MiNavDrawerComponent implements AfterViewInit, OnDestroy, AfterContentChecked, AfterContentInit {

  @Input() sWidth!: HTMLElement;
  @Input() lWidth!: HTMLElement;
  @Input() animateContainer!: HTMLElement;
  private _anchor!: Comment | null;
  private _isAttached!: boolean;

  @Input() get position(): 'start' | 'end' {
    return this._position;
  }

  set position(value: 'start' | 'end') {
    value = value === 'end' ? 'end' : 'start';

    if (value !== this._position) {
      // Static inputs in Ivy are set before the element is in the DOM.
      if (this._isAttached) {
        this._updatePositionInParent(value);
      }
      this._position = value;
      this.onPositionChanged.emit()
    }
  }
  private _position: 'start' | 'end' = 'start';

  @Output('positionChanged') readonly onPositionChanged = new EventEmitter<void>();


  @Input()
  get mode(): DrawerMode {
    return this._mode;
  }
  set mode(value: DrawerMode) {
    this._mode = value;
    // this._updateFocusTrapState();
    this._modeChanged.next();
  }
  private _mode: DrawerMode = 'over';

  @Input()
  get disableClose(): boolean {
    return this._disableClose;
  }
  set disableClose(value: BooleanInput) {
    this._disableClose = coerceBooleanProperty(value);
  }
  private _disableClose: boolean = false;


  @Input() get opened(): boolean {
    return this._opened;
  }

  set opened(value: boolean) {
    this.toggle(value)
  }
  readonly _modeChanged = new Subject<void>();

  private _opened: boolean = true;

  /** Emits whenever the drawer has started animating. */
  readonly _animationStarted = new Subject<AnimationEvent>();

  /** Emits whenever the drawer is done animating. */
  readonly _animationEnd = new Subject<AnimationEvent>();

  _animationState: 'open' | 'void' | 'min' = 'open';

  @Output() readonly openedChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output('opened') readonly _openedStream = this.openedChange.pipe(
    filter(o => o),
    map(() => { }),
  );

  @Output() readonly openedStart: Observable<void> = this._animationStarted.pipe(
    filter(e => e.fromState !== e.toState && e.toState.indexOf('open') === 0),
    mapTo(undefined)
  );

  @Output('closed') readonly _closedStream = this.openedChange.pipe(
    filter(o => !o),
    map(() => { })
  );

  @Output() readonly closedStart: Observable<void> = this._animationStarted.pipe(
    filter(e => e.fromState !== e.toState && e.toState === 'void'),
    mapTo(undefined)
  );

  // @ViewChild('smallContent') _smallContent!: ElementRef<HTMLElement>;
  // @ViewChild('largeContent') _largeContent!: ElementRef<HTMLElement>;
  @Output() openEvent: EventEmitter<any> = new EventEmitter();
  @Output() closeEvent: EventEmitter<any> = new EventEmitter();


  private readonly _destroyed = new Subject<void>();
  private _elementFocusedBeforeDrawerWasOpened: HTMLElement | null = null;

  @ViewChild('content') _content!: ElementRef<HTMLElement>;
  // @ViewChild('animationContainer', { static: false }) _animationContainer!: ElementRef<HTMLElement>
  /** Whether the drawer is initialized. Used for disabling the initial animation. */
  private _enableAnimations = false;
  containerView = 'large';
  large = 'large';
  small = 'small';
  dimensionX!: string;
  dimensionW!: string;

  constructor(
    private _elementRef: ElementRef<HTMLElement>,
    private router: Router,
    private _platform: Platform,
    private _ngZone: NgZone,
    @Optional() @Inject(DOCUMENT) private _doc: any,
    @Optional() @Inject(NAV_DRAWER_CONTAINER) public _container?: MiNavContainerComponent,
  ) {
    // this.animateContainer.

    this.openedChange.subscribe((opened: boolean) => {
      if (opened) {
        if (this._doc) {
          this._elementFocusedBeforeDrawerWasOpened = this._doc.activeElement as HTMLElement;
        }
      }
    })

    // this.router.events.subscribe(navUrl => {
    //   this.daRoute = navUrl
    // });

    this._ngZone.runOutsideAngular(() => {
      (fromEvent(this._elementRef.nativeElement, 'keydown') as Observable<KeyboardEvent>)
        .pipe(
          filter(event => {
            return event.key === 'Escape' && !hasModifierKey(event)
          }),
          takeUntil(this._destroyed)
        )
        .subscribe(event =>
          this._ngZone.run(() => {
            this.close();
            event.stopPropagation();
            event.preventDefault();
          })
        )
    })

    this._animationEnd.pipe(
      distinctUntilChanged((x, y) => {
        return x.fromState === y.fromState && x.toState === y.toState;
      })
    ).subscribe((event: AnimationEvent) => {
      const { fromState, toState } = event;
      // console.log(toState.indexOf('open'), toState);
      if ((toState.indexOf('open') === 0 && fromState === 'void') ||
        (toState === 'void' && fromState.indexOf('open') === 0) ||
        (toState.indexOf('open') === 0 && fromState === 'min') ||
        (toState === 'min' && fromState.indexOf('open') === 0)
      ) {
        this.openedChange.emit(this._opened);
      }

    })
  }
  // ngA() {

  // }
  ngAfterContentInit(): void {
    if (this._mode === 'side') {
      this.animateContainer.dataset.state = 'large'
    }
  }
  ngAfterViewInit(): void {
    this._isAttached = true;
    if (this._position === 'end') {
      this._updatePositionInParent('end');
    }


    // console.log(this._animationState)
    // console.log('nav conent')

  }
  ngAfterContentChecked() {
    if (this._platform.isBrowser) {
      this._enableAnimations = true;
    }
    // Enable the animations after the lifecycle hooks have run, in order to avoid animating
    // drawers that are open by default. When we're on the server, we shouldn't enable the
    // animations, because we don't want the drawer to animate the first time the user sees
    // the page.
    // if (this._platform.isBrowser) {
    //   this._enableAnimations = true;
    // }
  }
  getRect(element: HTMLElement) {
    return element.getBoundingClientRect();
  }

  toggleContainer() {

  }

  containerFLIP(toggleState: Promise<any>,
    firstEl: any,
    lastEl: any): void {

    // const firstRect = this.getRect(firstEl);
    requestAnimationFrame(() => {
      // toggleState()
      // let lastEl = getLastEl();
      // const lastRect = this.getRect(lastEl);
      // console.log(firstEl, lastEl)
      // const bx = String(lastEl.offsetWidth - firstEl.offsetWidth);
      // const bw = String(lastEl.offsetWidth / firstEl.offsetWidth);
      this.dimensionX = String(lastEl.offsetWidth - firstEl.offsetWidth);
      this.dimensionW = String(lastEl.offsetWidth / firstEl.offsetWidth);


      // console.log('bx:', dx, 'bw: ', dw)
      console.log('containging flip: ', this.dimensionX, firstEl, lastEl)
      // this._elementRef.nativeElement.children[0].
      this.animateContainer.classList.add('enlarging');
      console.log(this.animateContainer.className)
      // lastEl.style.setProperty('--bx', this.dimensionX);
      // lastEl.style.setProperty('--bw', this.dimensionW);
      this.animateContainer.style.setProperty('--bx', this.dimensionX)
      this.animateContainer.style.setProperty('--bw', this.dimensionW);
      // requestAnimationFrame(() => {
      // })

    })
    this.animateContainer.classList.remove('enlarging')

  }
  ngOnDestroy() {
    this._anchor?.remove();
    this._anchor = null;
    this._animationStarted.complete();
    this._animationEnd.complete();
    this._modeChanged.complete();
    this._destroyed.next();
    this._destroyed.complete();
  }

  open(): Promise<DrawerToggleResult> {
    if (this._mode === 'side') {
      this.containerView = 'large';
      this.animateContainer.dataset.state = this.containerView;
      this.containerFLIP(this.toggle(true), this.lWidth, this.sWidth)

    }
    // console.log('call my widths: ', this.sWidth.offsetWidth, this.lWidth.offsetWidth);
    return this.toggle(true);
    // this._elementRef.nativeElement.dataset.state = this.containerView;
    // this._elementRef.nativeElement.children[0].data
    // console.log(this._elementRef.nativeElement.da.children[0].dataset.state = this.containerView);
    // console.log()
    // this.containerFLIP(this.toggle(true), this.animateContainer.nativeElement)

  }

  close(): Promise<DrawerToggleResult> {

    console.log('close me baby')
    if (this._mode === 'side') {
      this.containerView = 'small';
      this.animateContainer.dataset.state = this.containerView;
      this.containerFLIP(this.toggle(false), this.sWidth, this.lWidth)
    }


    if (this._mode === 'over') {
      this._destroyed.complete();
    }
    this.closeEvent.emit(this.close)
    return this.toggle(false)
  }


  toggle(isOpen: boolean): Promise<DrawerToggleResult> {

    const result = this._setOpen(isOpen)

    return result;
  }

  _closeViaBackdropClick(): Promise<DrawerToggleResult> {
    return this._setOpen(false)
  }

  private _setOpen(
    isOpen: boolean): Promise<DrawerToggleResult> {
    this._opened = isOpen;

    if (this._mode === 'side' && isOpen) {
      this._animationState = this._enableAnimations ? 'open' : 'open';
    }
    else {
      window.innerWidth < 768 ? this._animationState = 'void' : this._animationState = 'min'
    }

    return new Promise<DrawerToggleResult>(resolve => {
      this.openedChange.pipe(take(1)).subscribe(open => resolve(open ? 'open' : 'close'))
    })
  }


  _getWidth(): number {
    return this._elementRef.nativeElement ? this._elementRef.nativeElement.offsetWidth : 0;
  }

  private _updatePositionInParent(newPosition: 'start' | 'end') {
    const element = this._elementRef.nativeElement;
    const parent = element.parentNode!;

    if (newPosition === 'end') {
      if (!this._anchor) {
        this._anchor = this._doc.createComment('mat-drawer-anchor')!;
        parent.insertBefore(this._anchor!, element);
      }

      parent.appendChild(element);
    } else if (this._anchor) {
      this._anchor.parentNode!.insertBefore(element, this._anchor);
    }
  }
}
