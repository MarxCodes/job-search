import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';

// import { JListComponent } from '../shared/components/j-list/j-list.component';
// import { JItemComponent } from '../shared/components/j-item/j-item.component';
// import { JBaseComponent } from '../shared/components/j-base/j-base.component';
// import { JDetailComponent } from '../shared/components/j-detail/j-detail.component';
import { JMobileBaseComponent } from './j-mobile-base/j-mobile-base.component';
import { JMobileDetailComponent } from './j-mobile-detail/j-mobile-detail.component';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    JMobileBaseComponent,
    JMobileDetailComponent,
    // JItemComponent,
    // JListComponent,
    // JBaseComponent,
    // JDetailComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatIconModule,
    HttpClientModule,
    RouterModule.forChild([
    //   { path: '', component: JMobileBaseComponent, children: [
    //     { path: ':id', component: JDetailComponent }
    //   ]

    // },
    { path: '', component: JMobileBaseComponent },
    { path: ':id', component: JMobileDetailComponent}

    ]),
    SharedModule
  ]
})
export class JobMobileModule { }
