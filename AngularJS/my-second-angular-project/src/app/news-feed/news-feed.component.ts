import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
})
export class NewsFeedComponent implements OnInit {
  feederList: any = [{share:'Welcome to my News Feed'}];
  @Output() sum = new EventEmitter<number>();
  Likes: number = 0;

  constructor() {}

  ngOnInit(): void {}

  feedAdd(data: string) {
    this.feederList.unshift({ share: data});
  }

  liked() {
    this.Likes++;
    this.sum.emit(this.Likes);
  }
}

