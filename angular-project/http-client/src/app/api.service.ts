import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private message$ = new BehaviorSubject<string>("Default Message");
  messageData = this.message$.asObservable();

  constructor() { }

  updateMessage(newMessage: string){
    this.message$.next(newMessage);
  }
}
//gagamitin para iupdate yung default message
