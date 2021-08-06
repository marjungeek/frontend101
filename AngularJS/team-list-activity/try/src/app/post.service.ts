import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url: string = 'https://api.first.org/data/v1/teams';
  constructor(private http: HttpClient) {}

  getList(): Observable<any> {
    return this.http.get('https://api.first.org/data/v1/teams');
  }

  getPost(id: any): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
}
