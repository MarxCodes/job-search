import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';

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
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { RegisterFormComponent } from './register-form/register-form.component';
// import { UserDetailComponent } from './user-detail/user-detail.component';


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
    SignUpFormComponent,
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: 'login', component: SignFormComponent}
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
    ])
  ]
})
export class UserModule { }
