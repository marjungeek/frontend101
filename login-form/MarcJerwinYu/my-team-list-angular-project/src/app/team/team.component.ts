import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamlistService } from '../teamlist.service';
import { newDataInterface } from '../data';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Output() like = new EventEmitter<number>();
  post : any;
  postResult : any;
  team! : newDataInterface;

  constructor(private TeamlistService : TeamlistService, private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const result = this.TeamlistService.getList();
    result.subscribe(result => {
      this.postResult = result.data;
      console.log( this.postResult);
      console.log(id);
      this.post = this.postResult.find(function (element : any){
        return element.id === id;
      })
      console.log(this.postResult);
    })
  }
  postLike(suki : number) {
    this.like.emit(suki);
    console.log(suki);
  }

  back(){
    this.router.navigate(['/team-list']);
  }

}
