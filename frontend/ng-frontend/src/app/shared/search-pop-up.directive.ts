import { ConnectionPositionPair, Overlay, OverlayRef } from '@angular/cdk/overlay';
import {
  Directive,
  Host,
  Input,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { TemplatePortal } from '@angular/cdk/portal';
import { SearchOptionButtonComponent } from './search-option-button/search-option-button.component';
@Directive({
  selector: '[appSearchPopUp]'
})
export class SearchPopUpDirective {

  @Input() appSearchPopUp!: TemplateRef<object>;
  @Input() label!: HTMLElement;
  private unsubscribe = new Subject();
  private overlayRef!: OverlayRef;

  constructor(@Host() private searchBtn: SearchOptionButtonComponent,
              private overlay: Overlay,
              private vcr: ViewContainerRef) { }


  ngOnInit(): void {
      console.log(this.label.getBoundingClientRect(), this.label);

      this.createOverlay();
  }
  ngAfterViewInit(): void {
      this.searchBtn.searchBtnClicked.asObservable().subscribe(() => {
        this.attachOverlay();
      })
  }
  ngOnDestroy(): void {
    this.detatchOverlay();
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  private createOverlay() {
    const scrollStrategy = this.overlay.scrollStrategies.reposition();
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(this.label)
      .withPositions([
        new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
        new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
      ])
     .withPush(false);

    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy,
      hasBackdrop: true,
      backdropClass: 'nu_backdrop',
      width: this.label.getBoundingClientRect().width,
    });

    this.overlayRef
      .backdropClick()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(() => {
        this.detatchOverlay()
      });
  }

  private attachOverlay() {
    if (!this.overlayRef.hasAttached()) {
      const templateSelector = new TemplatePortal(this.appSearchPopUp, this.vcr);
      this.overlayRef.attach(templateSelector);
    }
  }

  private detatchOverlay() {
    if(this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }
}
