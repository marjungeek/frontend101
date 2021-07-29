import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../team-service.service';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  likes: number = 0;

  constructor(private TeamService: TeamServiceService) { }

  ngOnInit(): void {
    this.TeamService.hulike.subscribe(res =>{
      console.log(res);
      this.likes = res;
    })
  }
}
