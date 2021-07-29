import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListInterface } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  apiLink = 'https://jsonplaceholder.typicode.com/posts'

  constructor(public http: HttpClient) { }
  getList() : Observable<ListInterface[]> {
  return this.http.get<ListInterface[]>(this.apiLink)
  }
  getPost(id: any): Observable<any>{
    return this.http.get(`${this.apiLink}/${id}`);
  }
}
