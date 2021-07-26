import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-content',
  templateUrl: './child-content.component.html',
  styleUrls: ['./child-content.component.css']
})
export class ChildContentComponent implements OnInit {

  @Input() public txtArea!:string;
  @Output() public likeCounter = new EventEmitter<number>();

  @Input() showModal!:boolean;

  like:number=1;

  strInput:any = [{status: 'Hello World! :D'}];

  constructor() {}
  ngOnInit(): void {}

  likeCount(){
    this.likeCounter.emit(this.like++);
    // console.log(this.like);
  }

  addTxt(){
    if(this.txtArea!=''){
      console.log(this.strInput.length);
      this.strInput.unshift({status: this.txtArea});
      this.txtArea='';
      this.showModal=false;

    }else{
      alert('Nothing to post.')
    }
  }


}
