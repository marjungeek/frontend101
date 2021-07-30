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
    const result = this.teamService.getTeamList();
    result.subscribe(result => {
      this.teamlist = result.data;
      console.log(result);
    })
  }

}
