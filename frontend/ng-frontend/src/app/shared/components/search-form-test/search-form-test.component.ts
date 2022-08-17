import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';
@Component({
  selector: 'app-search-form-test',
  templateUrl: './search-form-test.component.html',
  styleUrls: ['./search-form-test.component.scss']
})
export class SearchFormTestComponent implements OnInit {

  toggleOpen = false;
  searchForm = this.fb.group({
    jobTitle: ['', Validators.required],
    location: ['', Validators.required]
});
isOpen = true;

  constructor(private jobService: JobService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit(): void {

  }

  save() {
    let jobTitle = this.searchForm.value.jobTitle;
    let location = this.searchForm.value.location;

    this.toggle();

      this.jobService.getJobData({job_title: jobTitle,city: location}).subscribe(el => {
      this.router.navigate(['/jobs']);
    })
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }


  openOptions() {
    this.toggleOpen = !this.toggleOpen
  }

}
