import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostFormat } from './interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getList() : Observable<PostFormat[]> {
    return this.http.get<PostFormat[]>('https://jsonplaceholder.typicode.com/posts');
  }

}
