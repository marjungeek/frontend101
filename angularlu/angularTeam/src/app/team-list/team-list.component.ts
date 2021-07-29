import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import { teamInterface } from '../teamInterface';
import {ActivatedRoute, Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {
  teams!: teamInterface[];
  constructor(private teamService: TeamsService, private route:ActivatedRoute) { }

  ngOnInit(): void {

    const res = this.teamService.getTeam()
    res.subscribe(result=>{
      console.log()
      this.teams = result.data;
    }

    )


  }

}
