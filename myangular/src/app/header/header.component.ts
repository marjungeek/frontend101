import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  txtArea:string='';
  inputTxt:string='';

  like:number = 0;

  constructor() {}

  ngOnInit(): void {}

  likeCount(like:any): void{
    this.like=like;
    console.log(this.like);

  }

  submitTxt(){
    if(this.inputTxt!=''){

      this.txtArea = this.inputTxt;


    }else{
      alert('Empty Fields!');
    }

    // console.log();

  }

}
