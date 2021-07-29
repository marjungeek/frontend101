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
  record:any=[];

  myEndpoint:string='https://api.first.org/data/v1/teams';

  constructor(private http: HttpClient) { }

  getList(): Observable<any>{
    return this.http.get<any>(this.myEndpoint);
  }

  teamRecord(id:string|null):boolean{
    console.log('Record: ',this.record)
    if(id != null){
      if(this.record.includes(id)){
        console.log("Inrecord!");
        return false;
      }else{
        console.log("Not");
        //this.record.push(id);
        return true;
      }
    }else{
      return false;
    }



  }
  likeNum(data:boolean,id:string): void{
    if(data){
      this.total=this.total+1;
      //this.record.push(id);
      //console.log(this.total,this.record);
      if(!this.record.includes(id)){
        this.record.push(id);
      }

      this.count$.next(this.total);
      //console.log('+ :',this.count$,this.total);
    }else{
      this.total=this.total-1;
      this.count$.next(this.total);
      console.log('lenght:',this.record.length  );
      for(let i=0;i<this.record.length  ;i++){
        console.log(i);
        if(this.record[i]==id){
          console.log('something is remove')
          this.record.splice(i,1);
          console.log('Record: ',this.record)
          i=0;
        }
      }
      //this.record.remove(id);
      // console.log(this.record);
      // console.log('- :',this.count,this.total);
    }

  }
}
