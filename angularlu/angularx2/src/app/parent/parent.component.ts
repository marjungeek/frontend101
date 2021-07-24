import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  myLike: number = 0;

  likeChange(event: number){
    this.myLike = event;

  }

  
  feed :any = [
    {feedPost: 'qweqweqweqweqweqweqweqwewqeqweqweqweqweq'},
    {feedPost: 'asdasdasdasdasdasdasdasdasdasdasdasdasda'}
  ];

  addNewFeed(feedPost:string){

    this.feed.unshift({feedPost: feedPost});
    console.log(this.feed)
  }
  constructor() { }

  ngOnInit(): void {
  
  }

}
