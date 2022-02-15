import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-nav',
  templateUrl: './user-nav.component.html',
  styleUrls: ['./user-nav.component.scss']
})
export class UserNavComponent implements OnInit {
  navList = [
      { label: 'View Favourites', link: 'fav' },
      { label: 'Add Job', link: 'add' },
      { label: 'Edit Jobs', link: 'edit' }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
