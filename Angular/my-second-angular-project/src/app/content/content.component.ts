import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  @Input() newfeed!:string;
  @Output() like = new EventEmitter<number>();
  likeCount:number=0;
  comment:any = [
    {feed: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est laborum.`
    }
  ];


  constructor() {
    console.log(this.newfeed);
   }

  ngOnInit(): void {
  }

  addComment(){
    if(this.newfeed==''){
      alert('No new comment');
    }
    else{
    console.log(this.newfeed);
    this.comment.push({feed:this.newfeed});
    }
  }
  addLike(){
    this.like.emit(this.likeCount++);
    console.log(this.likeCount);
  }

}
