import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appInputFocus]'
})
export class InputFocusDirective {

  constructor(private elRef: ElementRef) { }

}
