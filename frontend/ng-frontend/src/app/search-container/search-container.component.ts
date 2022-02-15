import { animate, animateChild, group, query, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, HostListener } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-search-container',
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
                borderBottom: '2px solid black'
              })),
              transition('open => close',[
                animate('.3s'),
              ] ),

              state('close', style({
                fontSize: '1.5em',
                transform: "translateY(-10%)",
                borderBottom: 'none'
              })),
              transition('close => open', [

                animate('.3s'),
              ])

            ])

  ],
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.scss']
})
export class SearchContainerComponent implements OnInit {
  searchForm = this.fb.group({
    jobTitle: ['', Validators.required],
    location: ['', Validators.required]
});
isOpen = true;
  @HostListener('focus', ['$event']) focusInnit() {
    console.log('fired');
    if (this.isOpen !== true) {
      return this.isOpen = true;
    }
    return;
  }
toggle() {
  this.isOpen = !this.isOpen;
  console.log(this.isOpen);
}
  constructor(private fb: FormBuilder) { }

  ngOnInit() {

  }
  save() {
    console.log(this.searchForm);
    console.log('saved', +JSON.stringify(this.searchForm.value));
  }
}
