import { Component, OnInit, Output,EventEmitter,Input} from '@angular/core';


@Component({
  selector: 'app-angular-ex2-child',
  templateUrl: './angular-ex2-child.component.html',
  styleUrls: ['./angular-ex2-child.component.css']
})
export class AngularEX2ChildComponent implements OnInit {

  //@Input() submitData:any;


  @Input() listOfPostC:any = [];
  @Output() totalLike2= new EventEmitter<number>();
  totalLike:number=0;

  get now() : string { return Date(); }
    constructor() {

    }


  ngOnInit(): void {
  }
  likeMe(event:any,data:number){
    this.listOfPostC[data].likeCount++;
    this.totalLike++;
    this.totalLike2.emit(this.totalLike);
    console.log(`I was clicked! ${event} index: ${data} total likes: ${this.totalLike}`);
  }
  unlikeMe(event:any,data:number){
    if(this.listOfPostC[data].likeCount>0){
      this.listOfPostC[data].likeCount--;
      this.totalLike--;
      this.totalLike2.emit(this.totalLike);
    }else{
      console.log(`The count is zero no need to unlike! ${this.listOfPostC[data].likeCount}`)
    }
    console.log(`I was clicked! ${event} index: ${data} total likes: ${this.totalLike}`);
  }
  remove(index:number){
    if(this.listOfPostC[index].likeCount>0){
      this.totalLike=this.totalLike-this.listOfPostC[index].likeCount;
      this.totalLike2.emit(this.totalLike);
    }
    this.listOfPostC.splice(index,1);

  }
  // childMethod(){
  //   console.log('I was called from parent!')
  // }

  addMethod(data:string){
    this.listOfPostC.unshift({body:data,likeCount:0})
  }

}
