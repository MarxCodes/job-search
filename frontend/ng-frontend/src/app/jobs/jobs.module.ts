import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { JobItemComponent } from './job-item/job-item.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { SearchComponent } from './search/search.component';
import { JobService } from '../services/job.service';

import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    JobItemComponent,
    JobListComponent,
    JobsComponent,
    JobDetailComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: 'jobs', component: JobsComponent, children: [
        { path: ':id', component: JobDetailComponent }
      ]},

    ]),
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule
  ],
  providers: [JobService]
})
export class JobsModule { }
