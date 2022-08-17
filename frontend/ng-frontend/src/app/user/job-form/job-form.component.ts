import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Job } from 'src/app/models/Job.model';
@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.scss']
})
export class JobFormComponent implements OnInit {
  editForm = new FormGroup({
    name: new FormControl(),
    location: new FormControl(),
  })
  @ViewChild(NgForm) jobForm!: NgForm;

  job!: Job;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.route.parent)
  }

  save(){}
}
