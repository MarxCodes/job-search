import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
  exportAs: 'tooltip'
})
export class TooltipComponent implements OnInit {
  @ViewChild('root') rootTemplate!: TemplateRef<any>;

  constructor() { }

  ngOnInit(): void {
  }

}
