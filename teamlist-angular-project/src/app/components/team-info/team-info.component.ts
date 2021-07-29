import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';
import { teamData } from 'src/app/interface';
@Component({
  selector: 'app-team-info',
  templateUrl: './team-info.component.html',
  styleUrls: ['./team-info.component.css']
})
export class TeamInfoComponent implements OnInit {
  teaminfor: any;
  // teamCom: teamData ={
  //   teamfull: '',
  //   host:'',
  //   establishment:'',
  //   address: '',
  //   country: '',
  // }
  constructor(private route: ActivatedRoute,private service:AppServiceService) { }
  //@Output() like = new EventEmitter<number>();

  ngOnInit(): void {
    console.log("TANGA");
    const team:any = this.route.snapshot.paramMap.get('team');
    const result = this.service.getSpecific(team);
    result.subscribe(data=>{
       console.log(data);
       this.teaminfor = data;
       console.log(this.teaminfor.data);
    });
  }
  huLIKE(){
    this.service.likeLang("tanga");
  }
}
