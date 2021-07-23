import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  collectedLikes: number = 0;
  constructor() {}

  ngOnInit(): void {}

  childevent(data: number) {
    this.collectedLikes = data;
  }
}
