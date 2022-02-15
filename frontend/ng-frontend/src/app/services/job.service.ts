import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, filter, find, map, shareReplay, tap } from 'rxjs/operators';
// import { map } from 'rxjs/';
// import * as data from './'
interface Job {
  company_name: string,
  city: string,
  job_description: string,
  job_title: string,
  job_type: string,
  salary_offered: string,
  _id: string;
}
interface JobSearch {
  job_title: string
}

interface CitySearch {
  city: string
}

@Injectable({
  providedIn: 'root'
})
export class JobService {
  url = 'http://localhost:3000/api/v1/'
  data$ = Observable;
  body = {
    city: 'London',
    job_title: 'Marketing'
  }
  job$ = this.http.post<Job[]>('http://localhost:3000/jobs', this.body)
    .pipe(
      shareReplay(1),
      // catchError(/)
    );
  jobJuan$ = this.job$.pipe(
    map(i => {
      return i.map(e => e)[0]
    })
  )
  // configUrl = dummmy.json
  constructor(private http: HttpClient) {

   }
   getJob(od: any) {

     return this.job$.pipe(
      //  map(hh => hh.filter(g => od === g._id)),
      map(hh => hh.find(g => od === g._id)),

      //  map(o => o.filter(g => od === g._id)),
       tap(gg => console.log('from inside get job', gg)),
      //  tap(console.log),
      //  find(i => od === i.id)
       )    //  )
   }
   sliceData(index: string){
     let bindex = +index;
     this.job$.pipe(
       map(i => i.slice()[bindex]),
       tap(console.log)
     )
   }

   getJobs(): Observable <Job[]> {
     return this.http.post<Job[]>('http://localhost:3000/api/v1/jobs', this.body)
   }

   fetched(items: JobSearch):Observable<JobSearch[]> {

     return this.http.post<JobSearch[]>(this.url + 'jobs', items).pipe(tap(console.log))
      // .pipe(
      //   map(b => <Job>{...b})
      // )
      //  headers: new HttpHeaders({
      //    'Content-Type': 'application/json',
      //    'token' : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MTk3ZWI2ZjU5OTBmMzFkNDM5NTc4MTUiLCJuYW1lIjoiZXhjdXNlIiwiaWF0IjoxNjM3MzQ4NzQ1LCJleHAiOjE2Mzk5NDA3NDV9.pbyUOV8IxfOCX0IX2xyIA4TzZgqQ_dwrboJqU4G1DYk"
      //  }),

   }

   searchFetch(val: string) :Observable <JobSearch[]> {
     console.log('val from search func: ', val)
     return this.http.get<JobSearch[]>(`http://localhost:3000/api/v1/search?term=${val}`)
     .pipe(
       map(el => el),
       tap(console.log))

            }       //  map(vals => vals))
      // .pipe()
      searchCityFetch(val: string) :Observable <CitySearch[]> {
        console.log('val from city func: ', val)
        return this.http.get<CitySearch[]>(`http://localhost:3000/api/v1/searchCity?term=${val}`)
        .pipe(
          map(el => el),
          tap(console.log))
               }
  //  }
}
