import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { dataname } from 'src/app/data';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  dataname = [];
  getAPI = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

    getList() : Observable<dataname[]>{
     return this.http.get<dataname[]>(this.getAPI);
    }

  }

