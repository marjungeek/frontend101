import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teams } from './teams';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
  apiLink = 'https://api.first.org/data/v1/teams'

  constructor(public http: HttpClient) { }
  getList(): Observable<Teams[]> {
    return this.http.get<Teams[]>(this.apiLink)
  }
}
