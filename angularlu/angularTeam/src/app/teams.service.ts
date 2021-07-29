import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { teamInterface } from './teamInterface';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  url: string = 'https://api.first.org/data/v1/teams';
  constructor(private http:HttpClient) { }
  getTeam(): Observable<any>{
    return this.http.get<any>(this.url);

  }

  getInfo(id:any):Observable<[]>{
    console.log(id)
    return this.http.get<[]>('${this.url}?id=${id}');

  }

}
