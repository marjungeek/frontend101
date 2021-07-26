import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  @Output() likes = new EventEmitter<number>();
  @Input() addPost: any;

  constructor() {

  }

  ngOnInit(): void {
  }

  likePost(layk:number){
    console.log('Like added')
    this.likes.emit(layk);
  }

  }
