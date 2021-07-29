import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamFormat } from './postFormat.interface';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  myUrl: string = 'https://api.first.org/data/v1/teams';
  plsLike: number = 0;

  constructor(private http: HttpClient) { }

  getTeamList() : Observable<any> {
    return this.http.get(this.myUrl);
  }

  getTeamID(id: any) {
    return this.http.get(`${this.myUrl}/${id}`);
  }
  
  likedTeam(teamsLike: number){
    return teamsLike++, this.plsLike++;
  }

  showLikes(show: number) {
    return show = this.plsLike;
  }

}
