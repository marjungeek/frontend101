import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataInterface } from './data';

@Injectable({
  providedIn: 'root'
})
export class TeamlistService {

  teamsAPI = 'https://api.first.org/data/v1/teams';

  like : number = 0;

  constructor(private http : HttpClient) { }

  getList() : Observable<DataInterface> {
    return this.http.get<DataInterface>(this.teamsAPI);
  }

  // getPost(id : any) : Observable<any> {
  //   return this.http.get(`${this.teamsAPI}/${id}`);
  // }

   addLike() {
     this.like++;
     console.log(this.like);
   }
}
