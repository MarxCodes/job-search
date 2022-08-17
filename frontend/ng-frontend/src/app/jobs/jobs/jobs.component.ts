import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
import { first, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  expression = false;
  // list = this.jobService.job$;
  // id = this.list.pipe(
  //   map(i => {
  //     console.log(typeof i);
  //     return i.map(e => e)[0]
  //   })
  // ).subscribe(i => console.log(i))
  constructor(private route: ActivatedRoute,
              private router: Router,
              private jobService: JobService) { }

  ngOnInit(): void {
  }
  // toggleJobList() {
  //   this.expression = !this.expression;
  //   this.list.pipe(
  //     map(i => {
  //       return i.map(e => e)[0]
  //     })
  //     ).subscribe(i => {
  //       let { _id } = i;
  //       console.log(_id)
  //       // console.log(_id);
  //       this.router.navigate([`${_id}`], {relativeTo: this.route})

  //   })
  //   // let {_id} =  obj ;
  //   // console.log(_id);
  // }
}
