import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  globalAPI = 'https://api.first.org/data/v1/teams';

  constructor(private http: HttpClient) {}

  getList() : Observable<any>{
    return this.http.get('https://api.first.org/data/v1/teams');
  }

  getPost(id : any): Observable<any> {
    return this.http.get(`${this.globalAPI}/${id}`);
  }

}
