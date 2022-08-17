import { Component, OnInit } from '@angular/core';
// import { DualHeadRangeComponent } from 'src/app/components/dual-head-range/dual-head-range.component';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  list = ['Features', 'Checked', 'Salaries'];
  // constructor(private dhr: DualHeadRangeComponent) { }
  dinputtedVal: number = 50;

  ngOnInit(): void {
  }

  // applyFilters() {
  //   let min = this.dhr.min.nativeElement.value;
  //   let max = this.dhr.max.nativeElement.value;
  //   console.log({
  //     min, max
  //   })
  // }

}
