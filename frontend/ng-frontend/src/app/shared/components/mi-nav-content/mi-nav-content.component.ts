import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/scrolling';
import { AfterContentInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, forwardRef, Inject, NgZone, OnInit, ViewEncapsulation } from '@angular/core';
import { MiNavContainerComponent } from '../mi-nav-container/mi-nav-container.component';

@Component({
  selector: 'app-mi-nav-content',
  templateUrl: './mi-nav-content.component.html',
  styleUrls: ['../mi-nav-container/mi-nav-container.component.scss'],
  host: {
    'class': 'app-mi-nav-content',
    '[style.margin-left.px]': '_container._contentMargins.left',
    '[style.margin-right.px]': '_container._contentMargins.right',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: CdkScrollable,
      useExisting: MiNavContentComponent,
    }]

})
export class MiNavContentComponent extends CdkScrollable implements AfterContentInit {

  constructor(
    private _changeDetectorRef: ChangeDetectorRef,
    @Inject(forwardRef(() => MiNavContainerComponent)) public _container: MiNavContainerComponent,
    elementRef: ElementRef<HTMLElement>,
    scrollDispatcher: ScrollDispatcher,
    ngZone: NgZone,
  ) {

    super(elementRef, scrollDispatcher, ngZone)
  }
  ngAfterContentInit() {
    this._container._contentMarginChanges.subscribe(() => {
      this._changeDetectorRef.markForCheck();
    });
  }

}
