import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { myData } from './interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getList(): Observable<myData[]>{

    return this.http.get<myData[]>('https://jsonplaceholder.typicode.com/posts');

  }

}
