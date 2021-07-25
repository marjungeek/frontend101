import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-comp',
  templateUrl: './parent-comp.component.html',
  styleUrls: ['./parent-comp.component.css']
})
export class ParentCompComponent implements OnInit {

  myChat: any = [];
  myLikes: number = 0;
  meToSimsimi = this.myChat[length];
  simsimi: string = '';

  constructor() { }

  ngOnInit(): void { }

  sendMessage(myMessage: any, inputElement: HTMLInputElement){
    if(myMessage == "Ano pangalan mo?") this.simsimi = "Ako si simsimiiii!!!";
    else if (myMessage == "Kamusta ka?") this.simsimi = "Ok naman walang covid Hahaha Ikaw?";
    else if (myMessage == "Babae ka ba o lalaki?") this.simsimi = "Ok lang yan. Wag ka mawalan ng pag-asa. Mahal ka din ng crush mo.";
    else if (myMessage == "Bigyan mo nga ako ng motivational quote."){ 
    this.simsimi = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborumnumquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium";
    }else{
      this.simsimi = "...";
      console.log(this.meToSimsimi);
    }
    console.log(this.simsimi);

    this.myChat.push({message: myMessage}, {reply: this.simsimi});
    console.log(myMessage);
    inputElement.value = '';

  }

  numberOfLikes(howMany: number){
    this.myLikes = howMany;
  }

}
