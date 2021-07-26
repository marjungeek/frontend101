import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  likes:number=0;

  addPost: any = [
    {post: 'Hello'},
    {post: 'Welcome to my feed!! :)'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  userSubmit(post: string){
    console.log('Text Added')
    this.addPost.unshift({post: post})
  }

  likePost(avatar:number=1){
    this.likes++;
  }
}
