import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { catchError, map, retry } from 'rxjs/operators';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  listOfTeams: any;

  constructor() { }

  ngOnInit(): void {
  }

  getAPI(){
    const data$ = ajax('https://api.first.org/data/v1/teams');

    data$.pipe(
      map((res: any) => {
        if(res.response) {
          console.log('error occurred!');
          throw new Error('Something is wrong!');
        }
        return res.response;
      }),
      retry(4),
      catchError(() => of ([]))
    );

    data$.subscribe({
      next: (response) => {
        console.log(response.response.data)
        this.listOfTeams = response.response.data;
      },
      error: (err) => {
        console.log(`Error ${err}`)
      },
      complete: () => console.log('Completed')
    });

  }

}
