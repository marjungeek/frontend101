import { Component, NgModule, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Observable, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map,retry,catchError } from 'rxjs/operators';


@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})


export class Exercise3Component implements OnInit {

  sampleArray:any=  ["pig","cow","dog","cat"];
  bool:boolean = true;

  sample:any=[];


  constructor() {}
  ngOnInit(): void {}

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
    retry(3),
    catchError( () => of([]) )
    );

    // AJAX CALL ////////////////////////////////////////////////////////////////////////
    data$.subscribe({
      next: (response) => {
        console.log(response.response.data);
        this.sample = response.response.data;
      },
      error: (err) => {
        console.log('Error' + err)
      },
      complete: () =>{
        console.log('completed')
      }
    })

  };

  show(){
    if(this.bool==false){
      this.bool=true;
    }else{
      this.bool=false;
    }
  }

}