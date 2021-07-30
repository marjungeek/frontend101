import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TeamService {
  private teamUrl = 'https://api.first.org/data/v1/teams'

  constructor(private httpClient: HttpClient) { }

  getTeamList() : Observable<any> {
    return this.httpClient.get(this.teamUrl);
  }

  getTeam(data: any) : Observable<any> {
    return this.httpClient.get(`${this.teamUrl}/${data}`);
  }

}
