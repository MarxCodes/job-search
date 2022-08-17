import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HttpClientModule } from '@angular/common/http';

import { RouterModule } from '@angular/router';
import { DropDownComponent } from '../components/drop-down/drop-down.component';
import { DualHeadRangeComponent } from '../components/dual-head-range/dual-head-range.component';
import { SingleRangeComponent } from '../components/single-range/single-range.component';
// import { TextInputSharedComponent } from '../components/text-input-shared/text-input-shared.component';
import { TwoHeadRangeComponent } from './components/two-head-range/two-head-range.component';
// import { SearchPanelOptionsComponent } from './components/search-panel-options';
// import { SearchPanelOptionsComponent } from './components/search-panel-options/search-panel-options.component';
import { SingleHeadRangeComponent } from './single-head-range/single-head-range.component';

import { SearchOptionsComponent } from './search-options/search-options.component';
import { CheckboxReuseComponent } from './checkbox-reuse/checkbox-reuse.component';
import { InputTextLinkComponent } from './components/input-text-link/input-text-link.component';
import { SingleRangeContainerComponent } from './components/single-range-container/single-range-container.component';
import { PromptComponent } from './components/prompt/prompt.component';
import { JItemComponent } from './components/j-item/j-item.component';
import { JListComponent } from './components/j-list/j-list.component';
import { JBaseComponent } from './components/j-base/j-base.component';
import { JDetailComponent } from './components/j-detail/j-detail.component';
import { SearchFormTestComponent } from './components/search-form-test/search-form-test.component';
import { TextInputSharedComponent } from './components/text-input-shared/text-input-shared.component';
import { SearchPopUpDirective } from './search-pop-up.directive';
import { SearchOptionButtonComponent } from './search-option-button/search-option-button.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { CardsComponent } from './cards/cards.component';
import { SvgComponent } from './components/svg/svg.component';
import { CompleteNavComponent } from './components/complete-nav/complete-nav.component';
import { NavDrawerComponent } from './components/nav-drawer/nav-drawer.component';
import { NavMainContentComponent } from './components/nav-main-content/nav-main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { MiNavContainerComponent } from './components/mi-nav-container/mi-nav-container.component';
import { MiNavDrawerComponent } from './components/mi-nav-drawer/mi-nav-drawer.component';
import { MiNavContentComponent } from './components/mi-nav-content/mi-nav-content.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';
import { SignUpFormComponent } from './components/sign-up-form/sign-up-form.component';

@NgModule({
  declarations: [
    DropDownComponent,
    DualHeadRangeComponent,
    SingleRangeComponent,
    TextInputSharedComponent,
    TwoHeadRangeComponent,
    SingleHeadRangeComponent,
    SearchOptionsComponent,
    CheckboxReuseComponent,
    InputTextLinkComponent,
    SingleRangeContainerComponent,
    PromptComponent,
    JItemComponent,
    JListComponent,
    JBaseComponent,
    JDetailComponent,
    SearchFormTestComponent,
    SearchPopUpDirective,
    SearchOptionButtonComponent,
    SearchFormComponent,
    CardsComponent,
    SvgComponent,
    CompleteNavComponent,
    NavDrawerComponent,
    NavMainContentComponent,
    SidenavComponent,
    MiNavContainerComponent,
    MiNavDrawerComponent,
    MiNavContentComponent,
    RegisterFormComponent,
    SignUpFormComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatIconModule,
    MatAutocompleteModule,

    // MatIconModule,
  ],
  exports: [
    CheckboxReuseComponent,
    DropDownComponent,
    // DualHeadRangeComponent,
    // SingleRangeComponent,
    // TextInputComponent,
    TwoHeadRangeComponent,
    SingleHeadRangeComponent,
    SearchOptionsComponent,
    InputTextLinkComponent,
    SingleRangeContainerComponent,
    PromptComponent,
    JItemComponent,
    JListComponent,
    JBaseComponent,
    JDetailComponent,
    SearchFormTestComponent,
    SearchFormComponent,
    SvgComponent,
    CompleteNavComponent,
    NavDrawerComponent,
    NavMainContentComponent,
    MiNavContainerComponent,
    MiNavDrawerComponent,
    MiNavContentComponent,
    RegisterFormComponent,
    SignUpFormComponent

    // SearchPanelOptionsComponent
  ]
})
export class SharedModule { }
