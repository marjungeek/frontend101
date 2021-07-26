import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';



@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() FeedList: any = [];

  @Output () likeEvent = new EventEmitter<number>();
  likeCounter: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  addLikeEvent(IDName: string){
    let eventCounter = this.likeCounter++
    this.likeEvent.emit(eventCounter);
  }
}
