import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { JobService } from './job.service';


@Injectable({
  providedIn: 'root'
})
export class JobResolverService implements Resolve<any> {

  constructor(private jobService: JobService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<any> {
    const id = +route.paramMap.get('id');
    return this.jobService.jobJuan$
  }
  resolveOne() {
    return this.jobService.jobJuan$;
  }
}
