import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ title }}</p>
    <button name="userButton" (click)="onUserClick()">Click me!</button>
    <p>{{ loadstate }}</p>
    <hr>
    <!-- directives, two way binding -->
    <input name="userInput"type="text" [(ngModel)]="placeholder">
    <p>this value is changing! {{name}}</p>
    <hr>
    <p>Guessing game!</p>
    <div>
      <p>Guese the next number (0-9)</p>
      <button name="high"(click)="highButton()">Higher!</button>
      <button name="low"(click)="lowButton()">Lower!</button>
      <button name="same"(click)="sameButton()">Same!</button>
      <p>Current number: {{rand}} score: {{score}}</p>
      <p>{{mes}}</p>
    </div>
    <hr>
  `
})

export class MyComponent {
  title = 'dyme-angular-project';
  name = 'Dyme';
  placeholder = 'Type something...';
  loadstate ='loading...';
  rand:number = this.randomGen();
  temp=NaN;
  mes='';
  score=0;

  onUserInput(gg: any) {

    this.name =  gg.target.value;
  }
  onUserClick(){
    this.loadstate= 'finished!';
  }
  lowButton(){
    this.temp =this.rand;
    this.rand =this.randomGen();
    if(this.temp>this.rand){
      this.mes=`Correct! ${this.temp} > ${this.rand} Try Again`;
      this.score++;
    }else{
      this.mes=`Wrong! ${this.temp} !> ${this.rand} Try Again`;
      this.score=0;
    }
  }
  highButton(){
    this.temp =this.rand;
    this.rand =this.randomGen();
    if(this.temp<this.rand){
      this.mes=`Correct! ${this.temp} < ${this.rand} Try Again!`;
      this.score++;
    }else{
      this.mes=`Wrong! ${this.temp} !< ${this.rand} Try Again`;
      this.score=0;
    }
  }
  sameButton(){
    this.temp =this.rand;
    this.rand =this.randomGen();
    if(this.temp==this.rand){
      this.mes=`Correct! ${this.temp} = ${this.rand} Try Again!`;
      this.score++;
    }else{
      this.mes=`Wrong! ${this.temp} != ${this.rand} Try Again`;
      this.score=0;
    }
  }
  randomGen(){
    return Math.floor(Math.random() * 10);
  }
}
