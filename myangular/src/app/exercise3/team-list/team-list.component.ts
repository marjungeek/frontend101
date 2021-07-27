import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map,retry,catchError } from 'rxjs/operators';


@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teamL:any=[];
  hideTable:boolean=false;



  constructor() {}
  ngOnInit(): void {}

  hideTble(){
    this.hideTable=false;
  }

  getAPI(){

    // const data$ = from(fetch('https://api.first.org/data/v1/teams'));
    const data$ = ajax('https://api.first.org/data/v1/teams');


    // CATCHERROR OPERATOR ////////////////////////////////////////////////////////////
    // DATA OBSERVABLE
    data$.pipe(map((res: any) => {
      if(!res.response){
        console.log('error occured');
        throw new Error()
      }
      return res.response;
    }),
    retry(5),
    catchError( () => of([]) )
    );

    // AJAX CALL ////////////////////////////////////////////////////////////////////////
    data$.subscribe({
      next: (response) => {
        // console.log(response.response.data);
        this.teamL = response.response.data;
        console.log(this.teamL);
      },
      error: (err) => {
        console.log('Error' + err)
      },
      complete: () =>{
        console.log('completed')
      }
    })

  };

}
