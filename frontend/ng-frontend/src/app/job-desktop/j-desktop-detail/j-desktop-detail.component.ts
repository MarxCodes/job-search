import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { map, tap } from 'rxjs/operators';
import { JobService } from 'src/app/services/job.service';
@Component({
  selector: 'app-j-desktop-detail',
  templateUrl: './j-desktop-detail.component.html',
  styleUrls: ['./j-desktop-detail.component.scss']
})
export class JDesktopDetailComponent implements OnInit {
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
        if (!id) {
          console.log('no ID found')
        }
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
