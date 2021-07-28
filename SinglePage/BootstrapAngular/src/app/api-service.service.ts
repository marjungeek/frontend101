import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { data } from './data';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
private apiUrl = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }


  getList() : Observable<data[]> {
    return this.http.get<data[]>(this.apiUrl);
  }
}
