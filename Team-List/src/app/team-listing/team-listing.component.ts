import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-team-listing',
  templateUrl: './team-listing.component.html',
  styleUrls: ['./team-listing.component.css']
})
export class TeamListingComponent implements OnInit {

  ListofTeams: any;

  constructor() { }

  ngOnInit(): void {
  }

  getAPI(){
    const data$ = ajax('https://api.first.org/data/v1/teams');
    data$.pipe(
      map((res: any) => {
        if(res.response){
          console.log('Error Occured!!');
          throw new Error('Something Wrong!!!');
        }
        return res.response;
      }),
      retry(4),
      catchError(() => of([]))
    );

    data$.subscribe({
      next: (response) => {
        console.log(response.response.data)
        this.ListofTeams = response.response.data;
      },
      error: (err) => {
        console.log('Error ${err}')
      },
      complete: () => console.log('Completed')
    });
  }

}
