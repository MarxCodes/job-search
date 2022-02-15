import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';


@Component({
  selector: 'app-drop-test',
  templateUrl: './drop-test.component.html',
  styleUrls: ['./drop-test.component.scss']
})
export class DropTestComponent implements OnInit {
  @ViewChild('min', { static: true}) min: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('max', { static: true}) max: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('minSlider', { static: true}) minSlider: ElementRef<HTMLDivElement> = {} as ElementRef;
  @ViewChild('maxSlider', { static: true}) maxSlider: ElementRef<HTMLDivElement> = {} as ElementRef;
  @ViewChild('range', { static: true}) range: ElementRef<HTMLDivElement> = {} as ElementRef;

  // @Output() minimumChange = new EventEmitter<number>();
  // @Output() maximumChange = new EventEmitter<number>();

  @Input() minimum = 0;
  @Input() maximum = 0;


  constructor() { }

  ngOnInit(): void {
  }

  inputChangeMin($event: any) {
    console.log($event)
    var _this = this.min.nativeElement,
    min = parseInt(_this.min),
          max = parseInt(_this.max);
          console.log(typeof min)
    _this.valueAsNumber = Math.min(parseInt(_this.value), parseInt(this.max.nativeElement.value) - 1);

    var percent = ((_this.valueAsNumber - min) / (max - min)) * 100;
    this.minSlider.nativeElement.style.left = percent + '%';
    this.range.nativeElement.style.left = percent + "%";
    // this.minimumChange.emit(this.minimum);
  }

  inputChangeMax($event: any) {
    console.log($event)
    var _this = this.max.nativeElement,
          min = parseInt(_this.min),
          max = parseInt(_this.max);
          // console.log(typeof min)
    _this.valueAsNumber = Math.max(parseInt(_this.value), parseInt(this.min.nativeElement.value) + 1);

    var percent = ((_this.valueAsNumber - min) / (max - min)) * 100;
    this.maxSlider.nativeElement.style.right = (100 - percent) + '%';
    this.range.nativeElement.style.right = (100 - percent) + "%";
    // this.maximumChange.emit(this.maximum);
  }
}
