import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { data } from './data';
import { rendererTypeName } from '@angular/compiler';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
private apiUrl = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient) { }


  getList() : Observable<data[]> {
    return this.http.get<data[]>(this.apiUrl);
  }
  getPost(id: any): Observable<any>{
    return this.http.get('${this.apiUrl}/${id}');

  }
}
