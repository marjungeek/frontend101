import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostInterface } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

getList(): Observable <PostInterface[]> {
 return this.http.get<PostInterface[]>('https://jsonplaceholder.typicode.com/posts');

}


}
