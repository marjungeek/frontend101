import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  @Input() myChat: any = [];
  @Output() liked = new EventEmitter<number>();
  myLikesCount: number = 0;

  constructor() { 
    console.log("child is loaded...");
    console.log(this.myChat);
  }

  ngOnInit(): void {
  }

  userLiked(){
    let likesChild = this.myLikesCount++;
    this.liked.emit(likesChild);
  }

}
