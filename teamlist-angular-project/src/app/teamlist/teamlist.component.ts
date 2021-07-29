import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { TeamsInterface } from '../teamsinterface';

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {

  teamlist!: TeamsInterface [];

  constructor(private teamService: TeamsService) { }

  ngOnInit(): void {
    const result = this.teamService.getList();
    result.subscribe(result => {
      this.teamlist = result.data;
      console.log(this.teamlist);
    })


  }
  viewTeams(id: any) : void {
    console.log(id);
  }

}
