import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamFormat } from './postFormat.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  myUrl = 'https://api.first.org/data/v1/teams';
  num = 0;
  teamNumlikes = new BehaviorSubject<number>(this.num);
  amountLikes = this.teamNumlikes.asObservable();

  constructor(private http: HttpClient) { }

  getTeamList() : Observable<[]> {
    return this.http.get<[]>(this.myUrl);
  }

  getTeamID(team: any): Observable<[]> {
    console.log(team);
    return this.http.get<[]>(`${this.myUrl}/?team=${team}`);
  }
  
  likedTeam(){
    this.teamNumlikes.next(this.num++);
  }

}
