import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  title: string ='Team Details';
  teams:any;

  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const data = this.route.snapshot.paramMap.get('data');
    const result = this.teams = this.apiService.getData(data);
    result.subscribe(data => {
      this.teams = data;

    })
    console.log('teams: ',this.teams);
  }

}
