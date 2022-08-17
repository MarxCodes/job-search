import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  filters : object[] = [];
  subjectFilter = new Subject<object>();

  constructor() { }

  addToFiltersList(filterObj: {}) {
    this.filters.push(filterObj)
    console.log(this.filters)
  }

  addSubjectFilter(num: {}) {
    this.subjectFilter.subscribe(el => console.log(el))
  }
}
