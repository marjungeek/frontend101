import { Component, OnInit } from '@angular/core';
import { TeamInterface } from '../Team';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams!: TeamInterface[];

  constructor(private apiService: ApiService) { }


  ngOnInit(): void {
    const teamResult = this.apiService.getTeam();
    teamResult.subscribe(teamResult => {
      this.teams = teamResult.data;
      console.log(this.teams);
    })
  }

}
