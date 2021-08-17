import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data } from './interfaces'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private apiURL = 'https://jsonplaceholder.typicode.com/posts';

  constructor( private http: HttpClient ) { }

  getList() : Observable<data[]>{
    return this.http.get<data[]>(this.apiURL);
  }

}