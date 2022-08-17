import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  jobsData = [
    { name: 'Marketing', location: 'London', salary: 100000, added: '3 Days ago', id: 1},
    { name: 'Mongering', location: 'Brent', salary: 100000, added: 'Past Month' , id: 2},
    { name: 'Marketing Manager', location: 'London', salary: 100000, added: 'Yesterday' , id: 3},
    { name: 'Marketing Researcher', location: 'London', salary: 100000, added: 'Past Month' , id: 4},
    { name: 'Live Marketer', location: 'London', salary: 100000, added: 'Past Month' , id: 5}
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
