import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoadFrontComponent } from './components/load-front/load-front.component';
const routes: Routes = [
  // {path: '/'}
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: LoadFrontComponent, data: { animation: 'homePage' } },

  // {path: 'home', component: HomeComponent, data: { animation: 'homePage'}},
  {
    path: 'jobs', loadChildren: () => {
      if (window.innerWidth > 768) {
        return import('./job-desktop/job-desktop.module').then(m => m.JobDesktopModule)
      } else {
        return import('./job-mobile/job-mobile.module').then(m => m.JobMobileModule)

      }
    }
  }

  // { path: 'jobs', loadChildren: () => import('./jobs/jobs.module').then(m => m.JobsModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
