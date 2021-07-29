import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiGetTeamService {

  constructor(private http: HttpClient) { }

  getTeamList() : Observable<any> {
    return this.http.get<any>('https://api.first.org/data/v1/teams');
  }

  // getSpecificTeam(id: any) : Observable<any> {
  //   // return this.http.get<any>(`https://api.first.org/data/v1/teams/${id}`);
  //   return this.http.get<any>('https://api.first.org/data/v1/teams');
  // }
}
