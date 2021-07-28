import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostInterface } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  globalAPI = 'https://jsonplaceholder.typicode.com/posts'
  constructor(private http: HttpClient ) { }
  getList() : Observable<PostInterface[]> {
    return this.http.get<PostInterface[]>(this.globalAPI);
  }
}
