import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { teamdatas } from './teamdata';

@Injectable({
  providedIn: 'root'
})
export class TeamlistService {

  private teamUrl = "https://api.first.org/data/v1/teams";

  constructor(private http: HttpClient) { }

  getList () : Observable<any>{
    return this.http.get(this.teamUrl);
  }
  getPost(data:any) : Observable<any> {
    console.log(data);
    return this.http.get(`${this.teamUrl}/${data}`)
  }
}
