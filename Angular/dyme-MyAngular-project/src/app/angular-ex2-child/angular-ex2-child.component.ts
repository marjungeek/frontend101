import { Component, OnInit, Output,EventEmitter} from '@angular/core';


@Component({
  selector: 'app-angular-ex2-child',
  templateUrl: './angular-ex2-child.component.html',
  styleUrls: ['./angular-ex2-child.component.css']
})
export class AngularEX2ChildComponent implements OnInit {

  //@Input() submitData:string='';

  listOfPost:any = [
    {body:'Welcome! Try posting Something!',likeCount:0}
  ];
  @Output() totalLike2= new EventEmitter<number>();
  totalLike:number=0;

  get now() : string { return Date(); }
    constructor() {

    }


  ngOnInit(): void {
  }
  likeMe(event:any,data:number){
    this.listOfPost[data].likeCount++;
    this.totalLike++;
    this.totalLike2.emit(this.totalLike);
    console.log(`I was clicked! ${event} index: ${data} total likes: ${this.totalLike}`);
  }
  unlikeMe(event:any,data:number){
    if(this.listOfPost[data].likeCount>0){
      this.listOfPost[data].likeCount--;
      this.totalLike--;
      this.totalLike2.emit(this.totalLike);
    }else{
      console.log(`The count is zero no need to unlike! ${this.listOfPost[data].likeCount}`)
    }
    console.log(`I was clicked! ${event} index: ${data} total likes: ${this.totalLike}`);
  }
  childMethod(){
    console.log('I was called from parent!')
  }
  addMethod(data:string){
    this.listOfPost.unshift({body:data,likeCount:0})
  }
}
