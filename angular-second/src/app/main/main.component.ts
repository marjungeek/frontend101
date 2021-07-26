import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }
  likenum = 0;

  ngOnInit(): void {
  }

  displayLike($event: any) {
    this.likenum = $event;
  }
}
