import { Component, OnInit } from '@angular/core';
import { TeamlistService } from '../teamlist.service';
import { teamdatas } from '../teamdata';

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {

  teamLists!: teamdatas[];

  constructor(private teamListService: TeamlistService) { }

  ngOnInit(): void {
    const result = this.teamListService.getList();
    result.subscribe(result => {
      console.log(result);
      this.teamLists = result.data;
      console.log(result);
    })
  }

}
