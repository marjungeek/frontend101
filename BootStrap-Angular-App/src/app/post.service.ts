import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  APIurl: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getList(): Observable<any>{
    return this.http.get(this.APIurl);
  }

  getPost(id: any): Observable<any>{
    return this.http.get('${this.APIurl}/${id}');
  }
}
