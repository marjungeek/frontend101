import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TeamService } from '../team.service';
import { Team } from './team-description.interface';

@Component({
  selector: 'app-team-description',
  templateUrl: './team-description.component.html',
  styleUrls: ['./team-description.component.css']
})
export class TeamDescriptionComponent implements OnInit {
  team!: Team;

  constructor(private router: Router, private route: ActivatedRoute, private teamService: TeamService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const result = this.teamService.getTeam(id);
    result.subscribe(data => {
      console.log(data);
      this.team = data;
    });
  }

  back(): void{
    this.router.navigate
  }

}
