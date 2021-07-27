import { Component, OnInit, Input } from '@angular/core';
import { Observable,from,of } from 'rxjs';
import { ajax} from 'rxjs/ajax';
import { map, retry, catchError} from 'rxjs/operators'


@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {

  listOfTeams:any;
  constructor() { }

  ngOnInit(): void {
  }
  GETAPI(){
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
        //  for(let tanga of response.response.data){
        //    this.listOfTeams.push(tanga)
        //  }
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

