import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  collectedLikes: number = 0;
  constructor() {}

  ngOnInit(): void {}

  childevent(data: number) {
    this.collectedLikes = data; // data = total like from the child emitted to the sum event
  }
}
