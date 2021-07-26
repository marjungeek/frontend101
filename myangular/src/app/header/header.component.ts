import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  txtArea:string='';
  inputTxt:string='';

  showModal!:boolean;

  like:number = 0;

  constructor() {}

  ngOnInit(): void {}

  likeCount(like:any): void{
    this.like=like;
    console.log(this.like);
  }

  hideModal(bool:any):void{
    this.showModal=bool;
    console.log(bool);
  }

  submitTxt(){
    if(this.inputTxt!=''){

      this.txtArea = this.inputTxt;
      this.inputTxt='';
      this.showModal=true;
    }else{
      alert('Empty Fields!');
    }

    // console.log();

  }

}
