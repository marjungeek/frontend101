import { Component, Output, OnInit, EventEmitter } from '@angular/core';
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
    const team:any = this.activatedRoute.snapshot.paramMap.get('team');
    const result = this.teamService.getTeamID(team);
    result.subscribe(data => {
      console.log(data);
      this.teamContent = data;
      console.log(this.teamContent.data);
    });

  }

  clickLike(): void {
    this.teamService.likedTeam();
  }

  back(): void {
    this.router.navigate(['/team-list']);
  }

}
