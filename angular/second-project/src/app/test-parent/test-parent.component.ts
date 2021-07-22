import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-parent',
  templateUrl: './test-parent.component.html',
  styleUrls: ['./test-parent.component.css']
})
export class TestParentComponent implements OnInit {

  likeCounterParent: number = 0;

  feedList: any = [];
  forCheck: boolean = false;
  feedIDCounter: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  submitToFeed(input: any, domInput: HTMLInputElement){
    //console.log("submitToFeed Function Activated"); For Testing if this function is being called
    if(input == "" || input.trim() == ""){
      this.forCheck = true;
      domInput.value = '';
    } else{
      let tempFeedIDCounter = this.feedIDCounter++
      let uFeedID: string = "id" + String(tempFeedIDCounter);
      //console.log(typeof uFeedID);
      this.feedList.push({cfeedValue: input, feedID: uFeedID});
      domInput.value = '';
      this.forCheck = false;
      console.log(this.feedList);
    }
  }

  likeEventFromChild(value: number) {
    this.likeCounterParent = value;
  }
}
