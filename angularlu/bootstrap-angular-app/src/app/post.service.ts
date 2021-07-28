import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { postInterface } from './postInterface';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getList(): Observable<postInterface[]>{
    return this.http.get<postInterface[]>('https://jsonplaceholder.typicode.com/posts');

  }
}
