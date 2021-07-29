import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostFormat } from './postFormat.interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  myUrl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getList() : Observable<any> {
    return this.http.get(this.myUrl);
  }

  getPost(id: any) {
    return this.http.get(`${this.myUrl}/${id}`);
  } 

}
