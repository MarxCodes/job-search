import { animate, animateChild, group, query, stagger, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, HostListener, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from '../services/job.service';
@Component({
  selector: 'app-search-practice',
  templateUrl: './search-practice.component.html',
  styleUrls: ['./search-practice.component.scss'],
  animations: [
    trigger('panelState', [
      state('open', style({

      })),
      state('close', style({
        transform: '*'
      })),
      transition('close => open', [
        group([
          style({
            transform: '*'
          }),
          animate('.3s'),
          query('@*', animateChild())
            ])
          ]),
          transition('open => close', [
            group([
              style({
                transform: '*'
              }),
              animate('.3s'),
              query('@*', animateChild())
                ])
              ])
            ]),

            trigger('reducer', [
              state('open', style({
                fontSize: '2rem',
                transform: "translateY(0)",
                // borderBottom: '2px solid black'
              })),
              transition('open => close',[
                animate('.3s'),
              ] ),

              state('close', style({
                fontSize: '1.5em',
                transform: "translateY(-10%)",
                // borderBottom: 'none'
              })),
              transition('close => open', [

                animate('.3s'),
              ])

            ]),


            trigger('toggleOpen', [
              state('open', style({
                // transform: "translateY(0)",
                height: '*'
                // borderBottom: '2px solid black'
              })),
              state('close', style({
                height: '0px',
                // transform: "translateY(-10%)",
                // borderBottom: 'none'
              })),
              transition(':enter', [
                  query(':self', [
                    query('.anim-el', [
                      style({opacity: 0})
                    ]),
                    style({transform: 'scaleY(0)', transformOrigin: 'top', zIndex: 1}),
                    animate('100ms cubic-bezier(0,.94,.63,.58)', style({transform: 'scaleY(1)', transformOrigin: 'top'}))
                  ]),
                  query('.anim-el', [
                    style({
                      opacity: 0,
                      transform: 'translateX(-50px)',
                  }),
                  stagger(40, [
                    animate('20ms ease-out'),
                    style({
                      opacity: 1,
                      transform: 'none',
                    })
                  ])]),

              ]),

              transition(':leave', [
                query('.anim-el', [
                  style({
                    opacity: 1,
                    border: '2px solid red'
                  }),
                  stagger(200, [
                    style({
                      opacity: 0,
                    border: '4px solid red'

                    }),
                    animate('2s')
                  ])
                ]),
                query(':self', [
                  style({
                    opacity: 0,
                    transform: 'scaleX(0)',
                    transformOrigin: 'bottom',
                    border: '1px solid green'
                  }),
                  animate(4000, style({
                    opacity: 0,
                    transform: 'scaleX(0)',
                    transformOrigin: 'bottom',
                    border: '1px solid red'


                  }))
                ]),

              ])

            ])

  ],
})
export class SearchPracticeComponent implements OnInit {
  toggleOpen = false;
  searchForm = this.fb.group({
    jobTitle: ['', Validators.required],
    location: ['', Validators.required]
});
isOpen = true;


@HostListener('focusin', ['$event']) focusInnit() {
    console.log('fired');
    if (this.isOpen !== true) {
      return this.isOpen = true;
    }
    return;
  }


  constructor(private fb: FormBuilder,
              private jobService: JobService,
              private router: Router) { }

  ngOnInit() {

  }

  toggle() {
    this.isOpen = !this.isOpen;
  }
  save() {
    console.log(this.searchForm);
    let jobTitle = this.searchForm.value.jobTitle;
    let location = this.searchForm.value.location;

    // if(jobTitle || location === null) {
    //   return
    // }

    this.toggle();
    // this.jobService.getJobs({job_title: jobTitle,city: location}).subscribe(el => {
    //   console.log(el);
    //   this.router.navigate(['/jobs']);
    // })
        this.jobService.getJobData({job_title: jobTitle,city: location}).subscribe(el => {
      console.log(el);
      this.router.navigate(['/jobs']);
    })
  }

  openOptions() {
    this.toggleOpen = !this.toggleOpen
  }
}
