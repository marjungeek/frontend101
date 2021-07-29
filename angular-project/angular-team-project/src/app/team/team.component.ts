import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamlistService } from '../teamlist.service';
import { teamdatas } from '../teamdata';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamDisplay: any;

  constructor(private route : ActivatedRoute, private router: Router, private teamService: TeamlistService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('data')!;
    const result = this.teamDisplay = this.teamService.getPost(id);
    result.subscribe(data =>{
      this.teamDisplay = data;
      console.log(this.teamDisplay);
    })
  }
    back(){
      this.router.navigate(['/teamslist'])
    }

}
