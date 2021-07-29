import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http'
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private count$ = new BehaviorSubject<number>(0);
  count = this.count$.asObservable();

  total:number=0;

  myEndpoint:string='https://api.first.org/data/v1/teams';

  constructor(private http: HttpClient) { }

  getList(): Observable<any>{
    return this.http.get<any>(this.myEndpoint);
  }
  likeNum(data:boolean): void{
    if(data){
      this.total=this.total+1;
      console.log(this.total);
      this.count$.next(this.total);
      console.log('+ :',this.count$,this.total);
    }else{
      this.total=this.total-1;
      this.count$.next(this.total);
      console.log('+ :',this.count,this.total);
    }

  }
}
