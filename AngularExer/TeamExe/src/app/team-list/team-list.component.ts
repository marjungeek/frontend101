import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TeamServiceService } from '../team-service.service';
@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  team: any;
  constructor(private TeamService: TeamServiceService) { }

  ngOnInit(): void {
    const result = this.TeamService.getTeams();
    result.subscribe(result => {
      this.team = result
      console.log(result);
    })
  }

}
