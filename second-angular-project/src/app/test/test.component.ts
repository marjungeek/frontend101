import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Output()  = new EventEmitter;
  @Input() userSubmit: ;

  listOfPost: any = [
    {post: "Hello"}
  ];

  constructor() {

  }

  ngOnInit(): void {
    console.log(this.listOfPost);
  }
  userSubmit(post: string){
    this.listOfPost.push({post: post})
  }
}
