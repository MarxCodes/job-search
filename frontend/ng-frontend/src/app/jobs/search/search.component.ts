import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith, tap} from 'rxjs/operators';
import { JobService } from 'src/app/services/job.service';
interface JobSearch {
  job_title: string
}
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;
  // theOptions: JobSearch[];
  ngOnInit() {
  }

  constructor(private jobService: JobService) {
    // this.options = this.jobService.searchFetch();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      tap(el => console.log(el))
      // map(value => this._filter(value))
      // map(value => this.jobService.searchFetch(value))
      // map(cal => )
    )
    // .subscribe(el => this.jobService.searchFetch(el))
    // .subscribe(
    //   (data: JobSearch[]) =>  this.jobService.searchFetch(data),
    //   (err : any) => console.error(err),
    //   () => console.log('complete')
    // )

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    // return this.options.filter(option => option.toLowerCase().includes(filterValue));
    return this.options.filter(option => option.toLowerCase());

  }
}
