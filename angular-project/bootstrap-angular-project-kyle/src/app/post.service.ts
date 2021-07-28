import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { data } from './data';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiURL = 'https://jsonplaceholder.typicode.com/posts'

  constructor(private http: HttpClient ) { }

//data is the interface
  getList() : Observable<data[]>{
    return this.http.get<data[]>(this.apiURL);
  }

  getPost(id: any): Observable<any>{
    return this.http.get(`${this.apiURL}/${id}`);

  }

// getList():Observable<[]>{
// return this.http.get<[]>(this.apiURL);
// }

}
