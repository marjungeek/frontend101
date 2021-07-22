import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-ex2-parent',
  templateUrl: './angular-ex2-parent.component.html',
  styleUrls: ['./angular-ex2-parent.component.css']
})
export class AngularEX2ParentComponent implements OnInit {
  inputfeed:string='noinput';
  totalLikeP:number=0;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(event:string){
    this.inputfeed=event;
    console.log('submitted: ',this.inputfeed)
  }
  totalMethod(data:number){
    this.totalLikeP=data;
  }

}
