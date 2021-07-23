import { Component, OnInit, Output } from '@angular/core';
import * as EventEmitter from 'events';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  ListOfFeeds: any = [
    {body: "Welcome Minna-San!!!!", likeCount:0}
  ];

  @Output() TotalLike1 = new EventEmitter();
  TotalLike:number=0;

  get now() : string {return Date();}
  constructor() { }

  ngOnInit(): void {
  }

  like(event:any, data:number){
    this.ListOfFeeds[data].likeCount++;
    this.TotalLike++;
  }

  addNewFeed(data: string){
    this.ListOfFeeds.unshift({body:data, likeCount:0});
  }

}
