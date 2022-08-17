import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { Job } from '../models/Job.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = 'http://localhost:3000/api/v1/user';
  getFavourites$: Observable<Job[]> = this.getFavouriteJobs()

  getFavourite(id: any)  {
    return this.getFavourites$.pipe(
      map(dm =>
        dm.find(data => id === data._id)
      ),
      tap(help => console.log(help))
    )
  }

  constructor(private http: HttpClient) { }

  getFavouriteJobs():Observable <Job[]>{
    return this.http.get<Job[]>(this.url + '/actions')
  }

  addToFavourites(id: object) {
    console.log('call me');
    let token = localStorage.getItem('token');
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',

    })
  }

    return this.http.post(this.url + '/actions', id, httpOptions).pipe().subscribe(wl => this.getFavouriteJobs().subscribe());
  }

  deleteFavourite(id: object) {
    return this.http.delete(this.url + '/actions', id);
  }

  deleteFavouritePiped(id: object) {
    return this.http.delete(this.url + '/actions', id).pipe(
      map(el => console.log(el))
    );
  }

  getUserAddedJobs() {
    return this.http.get(this.url + '/jobs')
  }

  createUserAddedJob(body: object) {
    return this.http.post(this.url + '/jobs', body)
  }

  updateUserAddedJob(id: string, body: object) {
    return this.http.patch(this.url + '/jobs' + id, body);
  }

  getUserAddedJob(id: string) {
    return this.http.get(this.url + '/jobs' + id);
  }

  deleteUserAddeedJob(id: string) {
    return this.http.delete(this.url + '/jobs' + id);
  }
}
