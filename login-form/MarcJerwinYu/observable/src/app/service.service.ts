import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class serviceAPI {
  private message$ = new BehaviorSubject<string>("Default Message");
  messageData = this.message$.asObservable();

  constructor() { }

  updateMessage(newMessage : string) {
    this.message$.next(newMessage);
  }
}
