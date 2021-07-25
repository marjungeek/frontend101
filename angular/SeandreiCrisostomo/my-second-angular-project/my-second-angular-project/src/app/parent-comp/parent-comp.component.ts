import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  myChat: any = [];
  myLikes: number = 0;

  constructor() { }

  ngOnInit(): void { }

  sendMessage(myMessage: any, inputElement: HTMLInputElement){
    this.myChat.push({message: myMessage});
    console.log(myMessage);
    inputElement.value = '';
  }

  numberOfLikes(howMany: number){
    this.myLikes = howMany;
  }
  

}
