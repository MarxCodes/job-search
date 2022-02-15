import { Component, OnInit } from '@angular/core';
import { JobService } from 'src/app/services/job.service';
import { first, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.scss']
})
export class JobListComponent implements OnInit {
  // $
  // list : [] = [];
  // list = this.jobService.getJobs();
  list = this.jobService.job$;

  constructor(private jobService: JobService) { }

  ngOnInit(): void {
    // console.log(this.list.subscribe());
    this.list.subscribe(console.log)
    // console.log('list', )
    // this.list.pipe(
    //   map(i => {
    //     console.log(typeof i);
    //     return i.map(e => e)[0]
    //   }
    //     // map(o => {
    //     //   console.log(typeof o);
    //     //   return [o[0]]
    //     // })
    //     ))
    //   .subscribe(i => console.log(i))
  }

}
