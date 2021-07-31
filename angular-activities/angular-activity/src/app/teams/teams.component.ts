import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  resultObject: any;
  array: any;

  constructor(private activatedRoute: ActivatedRoute, private teamService: TeamService, private router: Router) { }

  ngOnInit(): void {
    const data = this.activatedRoute.snapshot.paramMap.get('id');
    const team = this.teamService.getTeamList();
    team.subscribe(team => {
      this.array = team.data;
      console.log('lahat ng data: ',this.array);
      console.log('team id: ',data);

      this.resultObject = this.array.find(function(element:any) {
        return element.id === data;
      });

      console.log('mga data ni team',this.resultObject);
    });

  }

  back() {
    this.router.navigate(['/teams']);
  }

}


// const data = this.activatedRoute.snapshot.paramMap.get('data');
//     const result = this.teamService.getTeam(data);
//     result.subscribe(data => {
//       console.log(this.teams)
//       this.teams = data
//     });
