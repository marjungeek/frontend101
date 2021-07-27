import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Observable, of} from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {

  listOfTeams: any;

  constructor() { }

  ngOnInit(): void {
  }

  getAPI(){
    //data observable
    const data$ = ajax('https://api.first.org/data/v1/teams');
    data$.pipe(
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
    data$.subscribe({
      next: (response) => {
        console.log(response.response.data)
        this.listOfTeams = response.response.data;
      },
      error: (err) => {
        console.log(`Error ${err}`)
      },
      complete: () => console.log('Completed')
    }
    );
  }
}


