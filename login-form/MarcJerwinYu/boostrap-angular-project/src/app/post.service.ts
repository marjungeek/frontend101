import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { DataInterface } from './data';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  globalAPI = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  getList() : Observable<DataInterface[]>{
    return this.http.get<DataInterface[]>(this.globalAPI);
  }
}
