import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  @Input() list:any;
  @Output() gusto = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  likeClick(rrr:number){
    console.log('Like Clicked...')
    this.gusto.emit(rrr);
  }

}
