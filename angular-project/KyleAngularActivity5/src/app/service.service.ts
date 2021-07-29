import { Injectable } from '@angular/core';

//step 1 import modules
import {HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { teamlistINT } from './teamlistINT';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //step 2, create the teamlist url
  private apiURL = 'https://api.first.org/data/v1/teams'
  private number1 = 0;
  private number2 = new BehaviorSubject<number>(this.number1);
  finalnumber = this.number2.asObservable();

  constructor(private http: HttpClient ) { }


  // step 3. create method
  getList() : Observable<[]>{
    return this.http.get<[]>(this.apiURL);
  }

addlike(addlikeCount:string){
this.number2.next(this.number1++);

}


  //step 3 create getlist method to call the apiurl
// getList():Observable<teamlistINT[]>{
// return this.http.get<teamlistINT[]>(this.apiURL);
// }

// getPost(id: any): Observable<any>{
//   return this.http.get(`${this.apiURL}/${id}`);

// }


getPost(id: any): Observable<[]>{
 return this.http.get<[]>(`${this.apiURL}?team=${id}`)

}



}
