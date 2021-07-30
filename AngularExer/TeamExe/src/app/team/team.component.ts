import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { data } from './data';
import { Observable } from 'rxjs';
import { TeamServiceService } from '../team-service.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  //@Output() likes = new EventEmitter<number>();
  post: any;

  constructor(private router: Router, private route: ActivatedRoute, private teamService: TeamServiceService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('team');
    const result = this.teamService.getPost(id);
    result.subscribe(data =>{
      console.log(data);
      this.post = data;
    })
  }
  //hulikes(likemo:number){
  ///  this.likes.emit(likemo);
////}
likeshu(){
  this.teamService.getLike();
}
backbtn() : void{
  this.router.navigate(['/teamlist']);
}


}
