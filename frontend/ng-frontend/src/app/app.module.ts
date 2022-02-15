import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopUpComponent } from './components/pop-up/pop-up.component';
import { NavComponent } from './components/nav/nav.component';
import { JobService } from './services/job.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SearchContainerComponent } from './search-container/search-container.component';
import { InputFocusDirective } from './input-focus.directive';
import { SearchPracticeComponent } from './search-practice/search-practice.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { JobsModule } from './jobs/jobs.module';
import { UserModule } from './user/user.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
import { SearchPanelOptionsComponent } from './components/search-panel-options/search-panel-options.component';
import { DualHeadRangeComponent } from './components/dual-head-range/dual-head-range.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { DropTestComponent } from './drop-test/drop-test.component';
import { CheckboxesComponent } from './components/checkboxes/checkboxes.component';
import { SingleRangeComponent } from './components/single-range/single-range.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { SearchFormTestComponent } from './components/search-form-test/search-form-test.component';
@NgModule({
  declarations: [
    AppComponent,
    PopUpComponent,
    NavComponent,
    SearchContainerComponent,
    InputFocusDirective,
    SearchPracticeComponent,
    WelcomeComponent,
    LoginFormComponent,
    HomeComponent,
    SearchPanelOptionsComponent,
    DualHeadRangeComponent,
    DropDownComponent,
    DropTestComponent,
    CheckboxesComponent,
    SingleRangeComponent,
    TextInputComponent,
    SearchFormTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    JobsModule,
    UserModule
  ],
  providers: [JobService],
  bootstrap: [AppComponent]
})
export class AppModule { }
