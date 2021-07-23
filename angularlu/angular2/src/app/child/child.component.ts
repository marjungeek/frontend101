import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {


  @Input() feedChild:string = 'hello';

  constructor() {

   }

  listOfFeed: any = []





  //   addFeed(newFeed:string){
  //   this.listOfFeed.push(newFeed);

  // }


  ngOnInit(): void {
    console.log(this.feedChild)
  }

}
