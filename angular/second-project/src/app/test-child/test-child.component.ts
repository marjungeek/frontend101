import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {//Ask about what is implements, and OnInit

  @Input() feedList: any = [];

  @Output() likeEvent = new EventEmitter<number>();
  likeCounter: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  addLikeEvent(IDName: string) {
    // console.log("addLikeEvent Function Activated"); //For Testing if this function is being called
    //console.log(typeof IDName);
    //document.getElementById(IDName)?.setAttribute("style", "display: none;");
    let eventCounter = this.likeCounter++
    this.likeEvent.emit(eventCounter);
  }

  //July 23: Currently stuck in trying to turn the like button to a dislike button
  //current plan is to use the unique ID of button then do DOM Manipulation from this TS File
  //see line 23
}
