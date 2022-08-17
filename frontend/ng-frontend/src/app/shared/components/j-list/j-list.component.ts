import { Component, OnInit } from '@angular/core';
import { fromEvent, combineLatest, merge, forkJoin, Observable } from 'rxjs';
// import { combineAll } from 'rxjs';
import { JobService } from 'src/app/services/job.service';
import { first, map, take, tap, combineAll, filter, mergeAll, mergeMap, flatMap  } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { Job } from 'src/app/models/Job.model';
@Component({
  selector: 'app-j-list',
  templateUrl: './j-list.component.html',
  styleUrls: ['./j-list.component.scss']
})
export class JListComponent implements OnInit {
  myJobData$ = this.jobService.jobData;
  // justSaved = this.user.getFavouriteJobs()
  list = this.jobService.job$;
  myID!: string;

  firstCopy = this.myJobData$.pipe(map(i => this.myID =  i[0]['_id'])).subscribe();

  myFun: any;
  savedJobs!: any;

  constructor(private jobService: JobService,
    private router: Router,
    private user: UserService) { }

    ngOnInit(): void {
      this.router.navigate(['jobs',this.myID])
      // MERGE STREAMS & FIND DUPLICATES
      // this.savedJobs = forkJoin([this.justSaved, this.myJobData$]).subscribe(data => {
      //   return data[0].filter(j => data[1].some(k => k._id === j['_id']))
      // })
      // console.log(this.savedJobs, typeof this.savedJobs);

 }
}
