import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  database: Data[] = [];
  APIurl: any = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getList(): Observable<any>{
    return this.http.get<Data[]>(this.APIurl);
  }
}
