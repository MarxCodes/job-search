import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JobService } from 'src/app/services/job.service';

@Component({
  selector: 'app-search-console',
  templateUrl: './search-console.component.html',
  styleUrls: ['./search-console.component.scss']
})
export class SearchConsoleComponent implements OnInit {
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
