import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  listOfTeams: any;

  constructor() { }

  ngOnInit() {
  }

  getAPI(){
    const data$ = ajax('https://api.first.org/data/v1/teams');

    data$.pipe(
      map((res:any) => {
      if(res.response){
        console.log('Error!');
        throw new Error('Something went wrong');
      }
      return res.response;
    }),
    retry(3),
    catchError(() => of([]))
    );

  data$.subscribe({
    next: (response) => {
      console.log(response.response.data)
      this.listOfTeams = response.response.data;
    },
    error: (err) => {
      console.log(`Error ${err}`)
    },
    complete: () => console.log('Completed Successfully')
  }
   );
 }
}
