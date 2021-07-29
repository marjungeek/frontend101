import { Component, OnInit } from '@angular/core';
import { TeamService } from '../post.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  teams: any;

  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    const mgaTeams = this.teamService.getTeamList();
    mgaTeams.subscribe(mgaTeams => {
      this.teams = mgaTeams;
    })
  }

  viewTeamID(id: number): void {
    console.log(id);
  }

}
