import { Component, OnInit } from '@angular/core';
import { TeamService } from '../post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  TotalLikes: number = 0;

  constructor(private teamServices: TeamService) { }

  ngOnInit() {
    this.TotalLikes = this.teamServices.showLikes(this.TotalLikes);
  }

}
