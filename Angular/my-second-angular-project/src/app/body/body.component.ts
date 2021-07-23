import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})


export class BodyComponent implements OnInit {
  inputString:string='';
  feed:string='';
  totalLikes:number=0;

  constructor() {
  }

  ngOnInit(): void {
  }

  post(){
    //console.log(this.inputString);
    this.feed = this.inputString;
    this.inputString='';
  }
  total(x:any):void{
    this.totalLikes=x;
  }

}
