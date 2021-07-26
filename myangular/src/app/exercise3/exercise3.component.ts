import { Component, NgModule, OnInit } from '@angular/core';


@Component({
  selector: 'app-exercise3',
  templateUrl: './exercise3.component.html',
  styleUrls: ['./exercise3.component.css']
})


export class Exercise3Component implements OnInit {

  sampleArray:any=  ["pig","cow","dog","cat"];
  bool:boolean = true;
  constructor() {}
  ngOnInit(): void {}

  show(){
    if(this.bool==false){
      this.bool=true;
    }else{
      this.bool=false;
    }
  }

}
