import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { myData } from './interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  myApi = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getList(): Observable<myData[]>{
    return this.http.get<myData[]>(this.myApi);
  }

  getPost(id : any): Observable<any> {
    return this.http.get(`${this.myApi}/${id}`);
  }

}
