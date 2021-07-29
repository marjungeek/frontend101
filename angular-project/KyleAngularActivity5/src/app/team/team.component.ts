import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teaml:any;
  post:any;

  constructor(private route: ActivatedRoute, private ServiceService: ServiceService) { }

  ngOnInit(): void {
    const team = this.route.snapshot.paramMap.get('team');
    const result = this.ServiceService.getPost(team);
    result.subscribe(data => {
      console.log(this.teaml)
      this.teaml =data});
  }

}
