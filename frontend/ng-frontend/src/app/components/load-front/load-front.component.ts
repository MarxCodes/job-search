import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DrawerMode, MiNavDrawerComponent } from 'src/app/shared/components/mi-nav-drawer/mi-nav-drawer.component';

@Component({
  selector: 'app-load-front',
  templateUrl: './load-front.component.html',
  styleUrls: ['./load-front.component.scss']
})
export class LoadFrontComponent implements OnInit {
  @ViewChild('drawer', { read: 'test' }) drawer!: MiNavDrawerComponent;

  freatureItem1 = [
    { img: 'assets/icons/job-icons/cash.svg', title: '$alary' },
    { img: 'assets/icons/job-icons/home.svg', title: 'Remote' },
    { img: 'assets/icons/job-icons/laptop.svg', title: '$alary' },
    { img: 'assets/icons/job-icons/grad.svg', title: 'Graduate' },
    { img: 'assets/icons/job-icons/puzzle.svg', title: 'Skilled' },
    { img: 'assets/icons/job-icons/calculator.svg', title: 'Holiday' },
  ]

  freatureItem2 = [
    { img: 'assets/icons/job-icons/cash.svg', title: '$alary' },
    { img: 'assets/icons/job-icons/home.svg', title: 'Remote' },
    { img: 'assets/icons/job-icons/laptop.svg', title: 'Design' },
    { img: 'assets/icons/job-icons/gym.svg', title: 'Gym' },
    { img: 'assets/icons/job-icons/eat.svg', title: 'Skilled' },
    { img: 'assets/icons/job-icons/beach.svg', title: 'Holiday' },
  ]

  register = true;
  insideMode: DrawerMode = 'over';
  insidePosition: 'start' | 'end' = 'end';
  // @ViewChild('latestCard') latestCard!: ElementRef
  // private cardWidth;
  constructor() { }

  ngOnInit(): void {
    // this.cardWidth = this.latestCard.nativeElement.offsetWidth;
  }
  changeTemplate(): void {
    this.register = false;
  }

}
