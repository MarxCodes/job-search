import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  list = ['one', 'two', 'three'];

  form = new FormGroup({
    checks: new FormControl('one'),
  });

  jobsData = [
    { name: 'Marketing', location: 'London', salary: 100000, added: '3 Days ago', id: 1},
    { name: 'Mongering', location: 'Brent', salary: 100000, added: 'Past Month' , id: 2},
    { name: 'Marketing Manager', location: 'London', salary: 100000, added: 'Yesterday' , id: 3},
    { name: 'Marketing Researcher', location: 'London', salary: 100000, added: 'Past Month' , id: 4},
    { name: 'Live Marketer', location: 'London', salary: 100000, added: 'Past Month' , id: 5}
  ]

  savedJobs = this.user.getFavouriteJobs();
  constructor(private user: UserService) { }

  ngOnInit(): void {
    console.log(this.savedJobs.subscribe(console.log))
  }

  deleteSavedJob($event: Event, id:string) {
    // alert('are you sure you want to remove this job?')
    $event.stopPropagation();
    console.log('pressed');
    // let myd = JSON.parse(id)
    // confirm()
    // this.user.deleteFavourite({id: id}).subscribe(console.log)
    // this.user.deleteFavouritePiped({body : {id}}).subscribe(() => { this.savedJobs = this.user.getFavouriteJobs()},

    // (err) => { throw },
    // )

  }

}
