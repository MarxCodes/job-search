import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { JobService } from './services/job.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

import { SearchContainerComponent } from './search-container/search-container.component';
import { InputFocusDirective } from './input-focus.directive';
import { SearchPracticeComponent } from './search-practice/search-practice.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { JobsModule } from './jobs/jobs.module';
import { UserModule } from './user/user.module';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { HomeComponent } from './components/home/home.component';
// import { SearchPanelOptionsComponent } from './components/search-panel-options/search-panel-options.component';
// import { DualHeadRangeComponent } from './components/dual-head-range/dual-head-range.component';
// import { DropDownComponent } from './components/drop-down/drop-down.component';
import { DropTestComponent } from './drop-test/drop-test.component';
// import { CheckboxesComponent } from './components/checkboxes/checkboxes.component';
// import { SingleRangeComponent } from './components/single-range/single-range.component';
// import { TextInputComponent } from './components/text-input/text-input.component';
import { SharedModule } from './shared/shared.module';
import { AddHeaderInterceptor } from './auth/add-header.interceptor';
import { SearchConsoleComponent } from './components/search-console/search-console.component';
import { SearchConsoleOptionsComponent } from './components/search-console-options/search-console-options.component';
import { LoadFrontComponent } from './components/load-front/load-front.component';
// import { MiNavComponent } from './components/mi-nav/mi-nav.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SearchContainerComponent,
    InputFocusDirective,
    SearchPracticeComponent,
    WelcomeComponent,
    LoginFormComponent,
    HomeComponent,
    // SearchPanelOptionsComponent,
    DropTestComponent,
    SearchConsoleComponent,
    SearchConsoleOptionsComponent,
    LoadFrontComponent,

    // MiNavComponent
    // DualHeadRangeComponent,
    // DropDownComponent,
    // CheckboxesComponent,
    // SingleRangeComponent,
    // TextInputComponent,
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
    UserModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [JobService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AddHeaderInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
