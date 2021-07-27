import { Component, OnInit } from '@angular/core';
// import { ajax } from 'rxjs/ajax'
// import { from, Observable, pipe, of } from 'rxjs';
// import { map, catchError, retry } from 'rxjs/operators';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-ex3-teamlist',
  templateUrl: './ex3-teamlist.component.html',
  styleUrls: ['./ex3-teamlist.component.css']
})
export class EX3TeamlistComponent implements OnInit {

  activeStatus:boolean=true;

  //serviceMes:string='default';

  listOfTeams:any;
  urlEndpoint='https://api.first.org/data/v1/teams';

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.lisOfTeams.subscribe(data => {
      this.listOfTeams = data;
    });
  }
  getAPI(){
    this.apiService.getAPI(this.urlEndpoint);
    //console.log(this.listOfTeams);
  }

  // getAPI(){
  //   //data observable
  //   const data$ = ajax('https://api.first.org/data/v1/teams').pipe(
  //     map((res: any) => {
  //       if(!res.response.data){
  //         console.log('why? error occurred!');
  //         throw new Error('Something wrong!');
  //       }
  //       console.log(res.response.data,res);
  //       return res.response.data;
  //     }),
  //     retry(4), //retry up tpp 4 times before failing
  //     catchError(() => of([]))
  //   );

  //   const observer = {
  //     next: (res:any) => {
  //       //console.log(res)
  //       this.listOfTeams = res;
  //     },
  //     error: (err: Error) => {
  //       console.log(`Error ${err}`)
  //     },
  //     complete: () => console.log('Completed')
  //   };

  //   data$.subscribe(observer);
  // }

  //extra
  changeStatus(){
    this.activeStatus=!this.activeStatus;
    console.log(`Ex3 current status is: ${this.activeStatus}`)
  }
  closeMe(){
    this.activeStatus=false;
  }

}
