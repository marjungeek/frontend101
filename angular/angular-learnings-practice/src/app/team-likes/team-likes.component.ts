import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-likes',
  templateUrl: './team-likes.component.html',
  // styleUrls: ['./team-likes.component.css']
  styleUrls: ['../app.component.css']
})
export class TeamLikesComponent implements OnInit {

  likeCounterParent: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  likeEventFromChild(value: number) {
    this.likeCounterParent = value;
  }

}
