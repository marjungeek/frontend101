import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any;
  constructor(private teamService: TeamService) { }

  ngOnInit(): void {
    const result = this.teamService.getList();
    result.subscribe(result => {
      this.teams = result;
    })
  }

  viewTeam(id: number): void{
    console.log(id);
  }

}
