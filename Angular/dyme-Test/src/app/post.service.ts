import { Injectable } from '@angular/core';
//import {HttpClientModule} from '@angular/common/http'
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

import { DT } from './interface';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getList(): Observable<DT[]>{
    return this.http.get<DT[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
