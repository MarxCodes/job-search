import { Component, Input, OnInit } from '@angular/core';
import { animate, animateChild, group, query, stagger, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-search-panel-options',
  templateUrl: './search-panel-options.component.html',
  styleUrls: ['./search-panel-options.component.scss'],
  animations: [
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
          stagger(500, [
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
  ]
})
export class SearchPanelOptionsComponent implements OnInit {
  dinputtedVal: number = 50;
  @Input() optionsOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
