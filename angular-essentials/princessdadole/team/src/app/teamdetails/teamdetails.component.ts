import { Component, OnInit } from '@angular/core';
import { TeamInterface } from '../team';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.css']
})
export class TeamdetailsComponent implements OnInit {
  team!:TeamInterface;
  id:any;
  sub:any;


  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _postService:PostService) { }


  ngOnInit(): void {
     this.sub=this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log(this.id);
     const result = this._postService.getTeams();
     result.subscribe(result=>{

        this.team=result.data[this.id];
        this.team.team_full=result.data[this.id]['team-full'];
        console.log(this.team)
        })
      })
    }

  onBack(): void {
    this._router.navigate(['teamlist']);
  }
}
