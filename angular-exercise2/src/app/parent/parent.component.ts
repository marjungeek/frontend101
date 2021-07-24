import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  addnewPosts: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  newPosts: string = "New Post";

  addNewPost(newPosts: string) {
    console.log('new post');
    this.addnewPosts = true;
  }
}
