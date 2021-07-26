import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-content',
  templateUrl: './child-content.component.html',
  styleUrls: ['./child-content.component.css']
})
export class ChildContentComponent implements OnInit {

  @Input() public txtArea!:string;
  @Output() public likeCounter = new EventEmitter<number>();

  @Output() public hideModal = new EventEmitter<boolean>();
  @Input() showModal:boolean = false ;

  like:number=1;

  strInput:any = [{status: 'Hello World! :D'}];

  constructor() {}
  ngOnInit(): void {


  }

  likeCount(){
    this.likeCounter.emit(this.like++);
    // console.log(this.like);
  }

  clearPost(){
    this.showModal=false;
    this.hideModal.emit(this.showModal);
  }


  addTxt(){
    if(this.txtArea!=''){
      console.log(this.strInput.length);
      this.strInput.unshift({status: this.txtArea});
      this.showModal=false;
      this.hideModal.emit(this.showModal);

    }else{
      alert('Nothing to post.')
    }
  }


}
