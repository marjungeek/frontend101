import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupService } from '../group.service';
import { Team } from './team-description.interface';

@Component({
  selector: 'app-team-description',
  templateUrl: './team-description.component.html',
  styleUrls: ['./team-description.component.css']
})
export class TeamDescriptionComponent implements OnInit {
  team!: Team;

  constructor(private router: Router, private route: ActivatedRoute, private groupService: GroupService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    const result = this.groupService.getTeam(id);
    result.subscribe(data => {
      console.log(data);
      this.team = data;
    });
  }

}
