import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Job } from 'src/app/models/Job.model';
import { JobService } from 'src/app/services/job.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  jobForm: FormGroup = this.fb.group({
    job_title: ['', [Validators.required]],
    company_name: [],
    city: [],
    salaryOffered: [],
    job_type: [],
    _id: []
  });

  job!: any;
  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private jobService: JobService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
      const id = params['id'];
      console.log(id, typeof id)
      this.getSavedJob(id)
    })
  }

  save(){}

  getSavedJob(id: string) {
    this.userService.getFavourite(id).subscribe(data => {
    this.job = data
    console.log(this.jobForm, this.job)
    this.jobForm.patchValue({
      job_title: this.job.job_title,
      company_name: this.job.company_name,
      city: this.job.city,
      salaryOffered: this.job.salary_offered,
      job_type: this.job.job_type,
      _id: this.job._id
    })
  }
    )
  }

  getJob(id: string) {
    this.jobService.getJob(id).subscribe(
      data => { this.job = data

      this.jobForm.patchValue({
        job_title: this.job.job_title,
        company_name: this.job.company_name,
        city: this.job.city,
        salaryOffered: this.job.salary_offered,
        job_type: this.job.job_type,
        _id: this.job._id
      })
      console.log(this.jobForm)
    }
    )
  }

  private displayJob(job: Job) {
    if(this.jobForm) this.jobForm.reset();

  }
}
