import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JobService } from './services/job.service';
import * as data from '../assets/dummy.json';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, switchMap, tap} from 'rxjs/operators';
import moment from 'moment';

interface JobSearch {
  job_title: string
}
interface CitySearch {
  city: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('elRef', {static: true}) elRef : ElementRef<HTMLHeadingElement> = {} as ElementRef;
  filteredOptions!: Observable <JobSearch[]>;
  cityFilteredOptions!: Observable <CitySearch[]>
  myControl = new FormControl();
  cityControl = new FormControl();
  minInputted = 0;
  maxInputted = 1;

  jobData = this.jobservice.getJobs()
  constructor(private jobservice: JobService) {
  }
  ngOnInit(){
    let now = moment().add()
    console.log(now);
    this.filteredOptions = this.myControl.valueChanges.pipe(
      switchMap(el => this.jobservice.searchFetch(el))
      );

      this.cityFilteredOptions = this.cityControl.valueChanges.pipe(
        switchMap(el => this.jobservice.searchCityFetch(el))
      )
    }


  getData() {
    this.jobservice.fetched(data).subscribe(el => console.log(el))
  }
  // private _getIT(val:string): Observable <string[]> {
  //   const filter = val.toLocaleLowerCase()
  //   return this.jobservice.searchFetch(filter);
  // }
}
