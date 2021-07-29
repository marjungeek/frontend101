import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { teamdatas } from './teamdata';

@Injectable({
  providedIn: 'root'
})
export class TeamlistService {

  teamUrl = "https://api.first.org/data/v1/teams";

  constructor(private http: HttpClient) { }

  getList () : Observable<teamdatas>{
    return this.http.get<teamdatas>(this.teamUrl);
  }
  getPost(id:any) : Observable<teamdatas> {
    return this.http.get<teamdatas>(`${this.teamUrl}/${id}`);
  }
}
