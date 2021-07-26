import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  ParentLikeCounter: number = 0;

  FeedList: any = [];
  Checking: boolean = false;
  FeedCounterID: number = 0;

  constructor(){ }

  ngOnInit(): void {
  }

  submitToFeed(input:any, domInput:HTMLInputElement){
    if(input == "" || input.trim() == ""){
      this.Checking = true;
      domInput.value = '';
    } else{
      let tempFeedCounterID = this.FeedCounterID++
      let uFeedID: string = "id" + String(tempFeedCounterID);
      this.FeedList.unshift({cFeedValue: input, feedID: uFeedID});
      domInput.value = '';
      this.Checking = false;
    }
  }

  likeEventFromChild(value: number){
    this.ParentLikeCounter = value;
  }

}
