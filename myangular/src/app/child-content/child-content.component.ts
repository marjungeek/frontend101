import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-content',
  templateUrl: './child-content.component.html',
  styleUrls: ['./child-content.component.css']
})
export class ChildContentComponent implements OnInit {

  @Input() public txtArea!:string;

  @Output() public likeCounter = new EventEmitter<number>();

  like:number=0;

  strInput:any = [{status: 'Hello World! :D'}];

  arrLen:number =0;

  constructor() {}

  ngOnInit(): void {}

  likeCount(){
    this.likeCounter.emit(this.like++);
    // console.log(this.like);
  }

  addTxt(lbl:any){
    if(this.txtArea!=''){
      console.log(this.strInput.length);
      this.strInput.push({status: this.txtArea});

    }else{
      alert('Nothing to post.')
    }



  }


}
