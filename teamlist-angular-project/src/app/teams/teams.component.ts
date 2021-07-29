import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from '../teams.service';
import { Teams } from './teams.interface';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  teams!: Teams ;

  constructor(private router: Router, private route: ActivatedRoute, private teamService: TeamsService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    const result = this.teamService.getTeams(id);
    result.subscribe(result => {
      console.log(result);
      this.teams = result.data;
    });
  }

  back() : void {
    this.router.navigate(['/teams']);
  }

}
