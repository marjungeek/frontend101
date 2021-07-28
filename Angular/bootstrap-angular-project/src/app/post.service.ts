import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostInterface } from './Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  globalAPI = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getList() : Observable<PostInterface[]>{
    return this.http.get<PostInterface[]>(this.globalAPI);
  }
  getPost(id: any) : Observable<any>{
    return this.http.get(`${this.globalAPI}/${id}`);
  }
}