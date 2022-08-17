import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';


import { UserDetailComponent } from './user-detail/user-detail.component';
import { JobFormComponent } from './job-form/job-form.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserNavComponent } from './user-nav/user-nav.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SignFormComponent } from './sign-form/sign-form.component';
// import { SignUpFormComponent } from '../shared/components/sign-up-form/sign-up-form.component';
// import { RegisterFormComponent } from '../shared/components/register-form/register-form.component';
import { AsideComponent } from './aside/aside.component';
import { FilterComponent } from './filter/filter.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UploadComponent } from './upload/upload.component';
import { TooltipDirective } from './tooltip.directive';
import { TooltipComponent } from './tooltip/tooltip.component';
// import { UserDetailComponent } from './user-detail/user-detail.component';
import { SharedModule } from '../shared/shared.module';
import { CheckItemComponent } from './check-item/check-item.component';
import { PopUpDirective } from './pop-up.directive';
import { PopUpButtonComponent } from './pop-up-button/pop-up-button.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { AuthService } from '../auth/auth.service';
import { AuthGuard } from '../auth/auth.guard';
import { AppliedJobsComponent } from './applied-jobs/applied-jobs.component';
@NgModule({
  declarations: [
    UserDetailComponent,
    JobFormComponent,
    UserItemComponent,
    UserListComponent,
    UserNavComponent,
    UserComponent,
    AddUserComponent,
    EditUserComponent,
    FavouritesComponent,
    SignFormComponent,
    // SignUpFormComponent,
    // RegisterFormComponent,
    AsideComponent,
    FilterComponent,
    DashboardComponent,
    UploadComponent,
    TooltipDirective,
    TooltipComponent,
    CheckItemComponent,
    PopUpDirective,
    PopUpButtonComponent,
    PopUpComponent,
    EditFormComponent,
    AppliedJobsComponent,

  ],
  imports: [
    CommonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    RouterModule.forChild([
      {
        path: 'user', component: UserComponent, canActivate: [AuthGuard], children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'saved', component: FavouritesComponent },
          { path: 'saved/:id/detail', component: UserDetailComponent },
          { path: 'upload', component: UploadComponent },
          { path: 'upload/:id/detail', component: UserDetailComponent },
          { path: 'upload/:id/edit', component: EditFormComponent },
          { path: 'upload/create', component: JobFormComponent },

        ]
      },
      { path: 'login', component: SignFormComponent }


      // { path: 'user', component: UserComponent, children: [
      //   { path: 'add', component: AddUserComponent },
      //   { path: 'edit', component: EditUserComponent, children: [
      //     { path: ':id', component: JobFormComponent}
      //   ]},
      //   { path: 'favourites', component: FavouritesComponent, children :[
      //     {path: ':id', component: UserDetailComponent}
      //   ] },
      //   // { path: '', component: SignFormComponent}
      //   // { path: 'add', component: User}
      // ]}
    ]),
    SharedModule
  ],
  providers: [AuthService]
})
export class UserModule { }
