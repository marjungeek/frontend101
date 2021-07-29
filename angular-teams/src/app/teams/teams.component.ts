import { Component, OnInit } from '@angular/core';
import { Teams } from '../teams';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teamsList!: Teams[];

  constructor(public teamsService: TeamsService) { }

  ngOnInit(): void {
    const result = this.teamsService.getList();
    result.subscribe(result => {
      this.teamsList = result;
    })
  }

}
