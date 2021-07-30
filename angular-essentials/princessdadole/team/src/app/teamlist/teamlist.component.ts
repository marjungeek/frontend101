import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { TeamInterface } from '../team';




@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {
teamdetails!: TeamInterface[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {

    const result = this.postService.getTeams();
    result.subscribe(result =>{
      this.teamdetails= result.data;
    });



  }

}
