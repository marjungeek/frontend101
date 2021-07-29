import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';
@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  teamList:any;
  constructor(private service: AppServiceService) { }

  ngOnInit(): void {
    const res = this.service.getTeam();
    res.subscribe(result=>{
      console.log(result);
      this.teamList = result;
    })
  }


}
