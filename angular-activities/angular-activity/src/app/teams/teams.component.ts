import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../team.service';
import { teamData } from '../teamData';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams: any;
  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService, private router: Router) { }

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.paramMap.get('data');
    const result = this.teamService.getTeam(data);
    result.subscribe(data => {
      console.log(this.teams)
      this.teams = data
    });

  }

  back() {
    this.router.navigate(['/teams']);
  }

}


