import { Component, OnInit } from '@angular/core';
//import from observable
import { from, of} from 'rxjs';
//ajax ajax observable ajax
import { ajax } from 'rxjs/ajax';
//import map observable operators
import { map, retry, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {
listofteams: any;
  constructor() { }

  ngOnInit(): void {
  }


GetAPI(){
const data$ = ajax('https://api.first.org/data/v1/teams');

// using pipes, retry and catch error-------------------------

// data$.pipe(map((res: any)=>{
// if(!res.response){
// console.log('error');
// throw new Error('something wrong');

// }

// return res.response;

// }),
// retry(4),
// catchError(()=> of([]))
// );

data$.subscribe({
next: (response)=>{this.listofteams = response.response.data;{console.log(response)}},
//  next(response){console.log(response)},
 error(err){console.log('Error' + err )},
 complete() {console.log('completed')}


}); //end of subscribe
}//end of get apis
}//end of class
