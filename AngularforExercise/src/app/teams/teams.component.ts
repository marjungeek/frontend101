import { Component, OnInit } from '@angular/core';
import { GroupService } from '../group.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams: any;
  constructor(private groupService: GroupService) { }

  ngOnInit(): void {
    const result = this.groupService.getList();
    result.subscribe(result => {
      this.teams = result;
    })
  }

}
