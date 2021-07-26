import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
})
export class NewsFeedComponent implements OnInit {

  @Input() childList:any = [];
  @Output() sum = new EventEmitter<any>();
  Likes: number = 0;

  constructor() {}

  ngOnInit(): void {}


  liked() {
    this.Likes++;
    this.sumEvent.emit(this.Likes);
  }
}

