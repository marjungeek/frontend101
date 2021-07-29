import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TeamsInterface } from './teamsinterface';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  url: string = 'https://api.first.org/data/v1/teams';

  constructor(private http: HttpClient) { }

  getList() : Observable<TeamsInterface> {
    return this.http.get<TeamsInterface>('https://api.first.org/data/v1/teams');

  }

  getTeams(id: any) : Observable<any> {
    return this.http.get('https://api.first.org/data/v1/teams' + id);
  }
}
