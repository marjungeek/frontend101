import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-ex2-parent',
  templateUrl: './angular-ex2-parent.component.html',
  styleUrls: ['./angular-ex2-parent.component.css']
})
export class AngularEX2ParentComponent implements OnInit {
  //inputfeed:string='noinput';
  totalLikeP:number=0;
  // activeStatus:boolean=false;

  listOfPostP:any = [
    {body:'Welcome! Try posting Something!',likeCount:0}
  ];

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(data:string){
    this.listOfPostP.unshift({body:data,likeCount:0});
    //console.log('submitted: ',this.inputfeed)
  }
  totalMethod(data:number){
    this.totalLikeP=data;
  }


  // changeStatus(){
  //   this.activeStatus=!this.activeStatus;
  //   console.log(`Ex2 current status is: ${this.activeStatus}`)
  // }
  // closeMe(){
  //   this.activeStatus=false;
  // }

}
