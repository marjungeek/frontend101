import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Input() isWritePost: boolean = true;
  @Output() likingPost = new EventEmitter<any>();

  postFeed:any = [
        { Post: '123 Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod temporincididunt ut labore et dolore magna aliqua'},
      ];

  constructor() {
  }

  ngOnInit(): void {
  }

  likePost(): void {
    this.isWritePost = true;
    this.likingPost.emit(this.isWritePost);
  }

  addPost(Post: any){
    this.postFeed.push({Post: Post});

  }

}
