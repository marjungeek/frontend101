import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamlistService } from '../teamlist.service';
import { DataInterface } from '../data';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  post! : any;

  constructor(private TeamlistService : TeamlistService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const result = this.TeamlistService.getPost(id);
    result.subscribe(data => {
      console.log(this.post);
      this.post = data;
    })
  }

  back(){
    this.router.navigate(['/team-list']);
  }

}
