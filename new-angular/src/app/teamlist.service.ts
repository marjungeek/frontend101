import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TeamInterface } from './team.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamlistService {

  teamApi = 'https://api.first.org/data/v1/teams';

  constructor(private http: HttpClient) { }
  getList(): Observable<any> {
    return this.http.get<any>(this.teamApi);
  }
  getPost(id: any): Observable<any> {
    return this.http.get(`${this.teamApi}/${id}`)
  }
}
