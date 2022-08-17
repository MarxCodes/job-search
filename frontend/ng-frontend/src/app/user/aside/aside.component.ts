import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit, OnDestroy {
  navigationList = [
    { title: 'Dashboard', svg: 'tune', route: '/user/dashboard'},
    { title: 'Saved Jobs', svg: 'star_rate', route: '/user/saved'},
    { title: 'Your Jobs', svg: 'backup', route: '/user/upload'},
    { title: 'Applications', svg: 'source', route: '/applications'},
    { title: 'Settings', svg: 'settings', route: '/settings'},
  ];


  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
  }

}
