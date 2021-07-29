import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiURL = 'https://api.first.org/data/v1/teams';

  constructor( private http: HttpClient ) { }

  getList() : Observable<[]>{
    return this.http.get<[]>(this.apiURL);
  }

  pushList(id:any): Observable<any>{
    return this.http.get(`${this.apiURL}?team=${id}`);
  }


}
