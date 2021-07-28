import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'//Added this manually

import { sampleInterfacePractice } from './interfacePractice';//Imported this to try interface

import { Observable, of } from 'rxjs';//Added this to use the Observable

@Injectable({
  providedIn: 'root'
})
export class PostService {

  //After import manual, injected "private http: HttpClient" in constructor
  constructor(private http: HttpClient) { }

  getList() : Observable<sampleInterfacePractice[]> {//July 28 inside the "<>" should be any
    //and the get<sample...> should only be get, modified it to try the interface stuff
    //July 28 Not sure if this is the right implementation of interface
    return this.http.get<sampleInterfacePractice[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
