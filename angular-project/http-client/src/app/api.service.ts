import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private message$ = new BehaviorSubject<string>("Default Message");
  messageData = this.message$.asObservable();

  constructor(private http: HttpClient) { }

  getAPI(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  updateMessage(newMessage: string){
    this.message$.next(newMessage);
  }
}
//gagamitin para iupdate yung default message
