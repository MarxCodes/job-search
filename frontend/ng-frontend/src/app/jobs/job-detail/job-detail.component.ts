import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  data : any;
  id: number = 0;
  party: any;
  el: any
  list = this.jobService.job$.pipe(
    map(i => {
      return i.map(e => e)[0]
    })
    )
  // myData  = this.jobService.getJobs().pipe(
  //   map(i =>  i = i)
  // ).subscribe(o => console.log('ooo', o));


  constructor(private route: ActivatedRoute,
              private jobService: JobService) {}

  ngOnInit(): void {
    // console.log('id filter attempt: ', this.jobService.getJob('619e74a61e4758c268209fc1'))

    // console.log('straight log: ', this.jobService.getJob('619e74a61e4758c26820a09e'))
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.jobService.getJob(this.id).subscribe(
          el => this.data = el
        )
        // .pipe(
        //   tap(console.log),
        //   map(el => {return el[0]}),
        // ).subscribe()


        // .pipe(tap(console.log))
        // .subscribe(
        //   el => {
        //     console.log(el);
        //      el[0] = this.data;
        //      return this.data
        //   }
        // )
        console.log('final countdown: ',  this.data);
        // console.log('final final countdown: ',  this.party);

      }
      )
  }

}
