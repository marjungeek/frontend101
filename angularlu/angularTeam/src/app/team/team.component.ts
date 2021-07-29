import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  constructor(private route: ActivatedRoute, private TeamsService: TeamsService) { }
  teamz: any;
  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    const result = this.TeamsService.getInfo(id);
    result.subscribe(data=>{
      console.log(data)
      this.teamz = data;
      console.log(this.teamz.data)

    }

    )

  }

}
