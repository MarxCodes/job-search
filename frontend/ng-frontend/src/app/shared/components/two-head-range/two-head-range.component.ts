import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { FilterService } from 'src/app/user/filter.service';

@Component({
  selector: 'app-two-head-range',
  templateUrl: './two-head-range.component.html',
  styleUrls: ['./two-head-range.component.scss']
})
export class TwoHeadRangeComponent implements OnInit {

  @ViewChild('min', { static: true}) min: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('max', { static: true}) max: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('minSlider', { static: true}) minSlider: ElementRef<HTMLDivElement> = {} as ElementRef;
  @ViewChild('maxSlider', { static: true}) maxSlider: ElementRef<HTMLDivElement> = {} as ElementRef;
  @ViewChild('range', { static: true}) range: ElementRef<HTMLDivElement> = {} as ElementRef;
  @ViewChild('minText', { static: true}) minText: ElementRef<HTMLInputElement> = {} as ElementRef;
  @ViewChild('maxText', { static: true}) maxText: ElementRef<HTMLInputElement> = {} as ElementRef;

  @Output() itemChange = new EventEmitter<number>();
  @Input() item = 0;
  @Input() name = '';


  @Output() minimumChange = new EventEmitter<number>();
  @Output() maximumChange = new EventEmitter<number>();

  @Input() minimum = 0;
  @Input() maximum = 0;
  minItem! : any;
  maxItem!: any;
  minly: any;
  maxly: any;
  textMinVal: any;
  textMaxVal: any;
  // @Input() minSliderVal = this.min.nativeElement.min;
  constructor(private filterService: FilterService) { }

  ngOnInit(): void {
  }

  applyFilters() {
    let minFigure, maxFigure;
    minFigure = this.min.nativeElement.value;
    maxFigure = this.max.nativeElement.value;

    let filters = {
      name: this.name,
      min: minFigure,
      max: maxFigure
    }
    this.filterService.addToFiltersList(filters)
  }

  inputChangeMin($event: any) {
    console.log('input min: ', $event)
    this.max.nativeElement.focus()
    var _this = this.min.nativeElement,
    min = parseInt(_this.min),
          max = parseInt(_this.max);
          console.log(typeof min)
    _this.valueAsNumber = Math.min(parseInt(_this.value), parseInt(this.max.nativeElement.value) - 1);

    var percent = ((_this.valueAsNumber - min) / (max - min)) * 100;
    this.minSlider.nativeElement.style.left = percent + '%';
    this.range.nativeElement.style.left = percent + "%";
    this.minly = percent;
    this.minText.nativeElement.valueAsNumber = percent
    // this.itemChange.emit(this.item);
  }

  inputChangeMax($event: any) {
    console.log('input max: ', $event)
    var _this = this.max.nativeElement,
          min = parseInt(_this.min),
          max = parseInt(_this.max);
          // console.log(typeof min)
    _this.valueAsNumber = Math.max(parseInt(_this.value), parseInt(this.min.nativeElement.value) + 1);
    console.log(min, max, _this.valueAsNumber)
    var percent = ((_this.valueAsNumber - min) / (max - min)) * 100;
    this.maxSlider.nativeElement.style.right = (100 - percent) + '%';
    this.range.nativeElement.style.right = (100 - percent) + "%";
    this.maxText.nativeElement.valueAsNumber = percent
    this.maxly = percent;


    // this.maximumChange.emit(this.maximum);
  }
  changeTextMin(event: Event) {
    // var percent = this.
    this.minSlider.nativeElement.style.left = (this.minText.nativeElement.valueAsNumber) + '%';
    this.range.nativeElement.style.left = (this.minText.nativeElement.valueAsNumber) + '%';
    this.textMinVal = (this.minText.nativeElement.valueAsNumber)
  }

  changeTextMax(event: Event) {
    this.maxSlider.nativeElement.style.right = (100 - this.maxText.nativeElement.valueAsNumber) + '%'
    this.range.nativeElement.style.right = (100 - this.maxText.nativeElement.valueAsNumber) + '%';
    this.textMaxVal = (this.maxText.nativeElement.valueAsNumber)
  }

  bounce(event: Event) {
    console.log('cliked on input: ', event);
  }
  bounced(event: Event) {
    console.log('cliked on head: ', event);
    this.maxSlider.nativeElement.focus()
  }
}
