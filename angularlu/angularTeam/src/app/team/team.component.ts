import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from '../teams.service';
import { Observable } from 'rxjs';
import { datas } from './tmInterface';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private TeamsService: TeamsService) { }
  teamz!:any;
  ngOnInit(): void {

    const team = this.route.snapshot.paramMap.get('team');
    const result = this.TeamsService.getInfo(team);
    result.subscribe((datas)=>{
      this.teamz = datas;

    }
    )

  }
  back():void{
    this.router.navigate(['/teamlist']);
  }

}
