import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { JobService } from 'src/app/services/job.service';
@Component({
  selector: 'app-j-detail',
  templateUrl: './j-detail.component.html',
  styleUrls: ['./j-detail.component.scss']
})
export class JDetailComponent implements OnInit {
  data : any;
  id: number = 0;
  party: any;
  el: any
  list = this.jobService.job$.pipe(
    map(i => {
      return i.map(e => e)[0]
    })
    )

  constructor(private route: ActivatedRoute,
              private jobService: JobService) {}

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        let id = params['id'];
        this.jobService.getJob(id).subscribe(
          el => {
            console.log(el)
            this.data = el
          }
        )

        console.log('final countdown: ',  this.data);

      }
      )
  }

}
