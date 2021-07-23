import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  testParent!:string  ;
  newFeed = "badang" ;


//  addNewFeed(){
//    this.newFeed = this.testParent;
//    //this.testParent = this.newFeed;
//    console.log(this.newFeed)
//  }


  constructor() { }

  ngOnInit(): void {

  }
  addNewFeed(){
    this.newFeed = this.testParent;
    //this.testParent = this.newFeed;
    console.log(this.newFeed)
  }

}
