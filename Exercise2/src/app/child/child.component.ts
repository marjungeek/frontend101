import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  listOfFeeds: any = [
    {describe : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor'},
    {describe: 'Hello World is at finest!!!'},
    {describe: 'I got the Best of Both Worlds'},
  ];

  constructor() { }

  ngOnInit(): void {
    console.log(this.listOfFeeds);
  }

  addNewFeed(describe: any){
    console.log('Testing')
    this.listOfFeeds.push({describe});
  }

}
