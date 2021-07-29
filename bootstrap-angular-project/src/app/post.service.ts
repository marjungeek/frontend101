import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostInterface } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

getList() : Observable<PostInterface[]>{
  return this.http.get<PostInterface[]>('https://jsonplaceholder.typicode.com/posts');
}

getPost(id: any) : Observable<any> {
  return this.http.get(`${this.url}/${id}`);
}
}
