import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamlistService } from '../teamlist.service';
import { TeamInterface } from '../team.interface';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team!: TeamInterface;

  constructor(private router: Router, private route: ActivatedRoute, private teamlistService: TeamlistService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    const result = this.teamlistService.getPost('id');
    result.subscribe(data => {
      console.log(data);
      this.team = data;
    });

  }
  back() {
    this.router.navigate(['/teamlist']);
  }
}
