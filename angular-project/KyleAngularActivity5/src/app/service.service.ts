import { Injectable } from '@angular/core';

//step 1 import modules
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { teamlistINT } from './teamlistINT';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //step 2, create the teamlist url
  private apiURL = 'https://api.first.org/data/v1/teams'

  constructor(private http: HttpClient ) { }

  // step 3. create method
  getList() : Observable<[]>{
    return this.http.get<[]>(this.apiURL);
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