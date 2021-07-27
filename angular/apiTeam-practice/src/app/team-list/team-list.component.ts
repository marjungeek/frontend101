import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';//Added this
import { ajax } from 'rxjs/ajax';//Added this
import { map, retry, catchError } from 'rxjs/operators';//Added this

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teamList: any;

  constructor() { }

  ngOnInit(): void {
  }

  callAPI() {

    const apiLink$ = ajax('https://api.first.org/data/v1/teams');

    /*apiLink$.pipe()?? What is the use of this pipe??
      research map method, retry, and catchError
    */
    apiLink$.pipe(
      map((res: any) => {
        if(res.response){ //no result
          console.log('error occurred!');
          throw new Error('Something wrong!');
        }
        return res.response;
      }),
      retry(4), //retry up tpp 4 times before failing
      catchError(() => of([]))
    );

    apiLink$.subscribe({
      next: (dataFromObservable) => {
        console.log(dataFromObservable.response.data); //For checking what data is received from API
        this.teamList = dataFromObservable.response.data;
      }
    })

  }

}
