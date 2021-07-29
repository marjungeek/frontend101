import { Injectable } from '@angular/core';
import { TeamInterface } from './Team';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {
  teamAPI = 'https://api.first.org/data/v1/teams';

  constructor(private http: HttpClient) { }

  getTeam() : Observable<any>{
     return this.http.get<any>(this.teamAPI);
  }

  getData(data: any) : Observable<any>{
    return this.http.get(`${this.teamAPI}/${data}`);
  }

}
