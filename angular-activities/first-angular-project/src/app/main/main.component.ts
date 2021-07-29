import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  // @Input() : string;
  // @Output() userReaction = new EventEmitter<number>();

  // feed:string = [{post: 'abcdefg'}, {post: 'testtest'}];

  constructor() { }

  ngOnInit(): void {
  }

  // submit(post:string){

  // }
}
