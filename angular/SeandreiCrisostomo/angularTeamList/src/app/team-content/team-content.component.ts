import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../post.service';

@Component({
  selector: 'app-team-content',
  templateUrl: './team-content.component.html',
  styleUrls: ['./team-content.component.css']
})
export class TeamContentComponent implements OnInit {

  teamContent: any;
  likesOfTeam: number = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private teamService: TeamService) { }

  ngOnInit(): void {
    const teamId = this.activatedRoute.snapshot.paramMap.get('teams')!;
    const resultID = this.teamService.getTeamID(teamId);
    resultID.subscribe(resultID => {
      console.log(resultID);
      this.teamContent = resultID;
    });

  }

  clickLike(): void {
    this.teamService.likedTeam(this.likesOfTeam);
  }

  back(): void {
    this.router.navigate(['/team-list']);
  }

}
