import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private message$ = new BehaviorSubject<string>("Be the first to comment!");
  messageData = this.message$.asObservable();

  constructor() { }

  updateMessage(newMessage: string){
    this.message$.next(newMessage);
  }
}
