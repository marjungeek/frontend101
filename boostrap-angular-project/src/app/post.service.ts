import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getList() : Observable<any> {
    return this.http.get(this.url);
  }

  getPost(id: any) {
    return this.http.get(`${this.url}/${id}`);
  }
}
