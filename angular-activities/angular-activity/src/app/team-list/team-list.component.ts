import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { teamData } from 'src/app/teamData';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teamlist!: teamData[];
  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    const teamRes = this.teamService.getTeamList();
    teamRes.subscribe(teamRes => {
      this.teamlist = teamRes.data;
      console.log(this.teamlist);
    })
  }

}
