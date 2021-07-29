import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TeamServiceService {
private apiUrl = 'https://api.first.org/data/v1/teams'
private number = 0;
private likes = new BehaviorSubject<number>(this.number);
  hulike = this.likes.asObservable();

  constructor(private http: HttpClient ) { }

getTeams() : Observable<[]> {
  return this.http.get<[]>(this.apiUrl);
}

getPost(team: any): Observable<any> {
  return this.http.get(`${this.apiUrl}?team=${team}`);
}
getLike(){
  this.likes.next(this.number++);
}

}
