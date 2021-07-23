import { Component, OnInit , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  numberOfLikes: number = 0;
  isMessage: boolean = true;
  message:string = "ParentComponent";

  // @Output() parentFunction = new EventEmitter<any>();
  postFeed:any = [
    { Post: ''},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  postSubmit(Post: any){
    this.isMessage = true;
    this.postFeed.push({Post: Post});
    // this.parentFunction.emit(this.postFeed);
  }

  postLike(){
    // this.isValidUser = true;
    this.numberOfLikes++;
  }
}
