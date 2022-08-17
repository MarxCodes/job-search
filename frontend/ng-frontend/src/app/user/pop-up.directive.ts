
import { ConnectionPositionPair, Overlay, OverlayRef } from '@angular/cdk/overlay';
import {
  AfterViewInit,
  Directive,
  Host,
  Input,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs';
// import { PopOupButtonComponent } from './pop-oup-button/pop-oup-button.component';

import { takeUntil } from 'rxjs/operators';
import { TemplatePortal } from '@angular/cdk/portal';
import { PopUpButtonComponent } from './pop-up-button/pop-up-button.component';
// import { PopUpButtonComponent } from '../components/pop-up/pop-up.component';
@Directive({
  selector: '[appPopUp]'
})
export class PopUpDirective {

  @Input() appPopUp!: TemplateRef<object>;
  @Input() label!: HTMLElement;
  private unsubscribe = new Subject();
  private overlayRef!: OverlayRef;

  constructor(@Host() private infoButtonComponent: PopUpButtonComponent,
              private overlay: Overlay,
              private vcr: ViewContainerRef) { }


  ngOnInit(): void {
      console.log(this.label.getBoundingClientRect());
      this.createOverlay();
  }
  ngAfterViewInit(): void {
      this.infoButtonComponent.infoButtonClicked.asObservable().subscribe(() => {
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
      width: this.label.getBoundingClientRect().width
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
      const templateSelector = new TemplatePortal(this.appPopUp, this.vcr);
      this.overlayRef.attach(templateSelector);
    }
  }

  private detatchOverlay() {
    if(this.overlayRef.hasAttached()) {
      this.overlayRef.detach();
    }
  }
}
