import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

import { JDesktopBaseComponent } from './j-desktop-base/j-desktop-base.component';
// import { JListComponent } from '../shared/components/j-list/j-list.component';
// import { JItemComponent } from '../shared/components/j-item/j-item.component';
// import { JBaseComponent } from '../shared/components/j-base/j-base.component';
// import { JDetailComponent } from '../shared/components/j-detail/j-detail.component';
import { JDesktopDetailComponent } from './j-desktop-detail/j-desktop-detail.component';
// import { JobService } from '../services/job.service';
import { SharedModule } from '../shared/shared.module';
// import { JListComponent } from '../shared/components/j-list/j-list.component';
@NgModule({
  declarations: [
    JDesktopBaseComponent,
    // JItemComponent,
    // JListComponent,
    // JBaseComponent,
    // JDetailComponent,
    JDesktopDetailComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forChild([
      { path: '', component: JDesktopBaseComponent, children: [
        { path: ':id', component: JDesktopDetailComponent }
      ]},

    ]),
    SharedModule

  ]
})
export class JobDesktopModule { }
