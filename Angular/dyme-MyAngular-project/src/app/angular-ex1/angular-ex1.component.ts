import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-ex1',
  templateUrl: './angular-ex1.component.html',
  styleUrls: ['./angular-ex1.component.css']
})

export class AngularEx1Component implements OnInit {
  title = 'dyme-angular-project';
  name = 'Dyme';
  placeholder = 'Type something...';
  loadstate ='loading...';
  rand:number = this.randomGen();
  temp=NaN;
  mes='';
  score=0;
  constructor() { }

  ngOnInit(): void {
  }


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
