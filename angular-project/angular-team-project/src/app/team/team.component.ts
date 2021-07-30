import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamlistService } from '../teamlist.service';
import { teamdatas } from '../teamdata';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  datas:any;
  teamDisplay: any;

  constructor(
    private route : ActivatedRoute,
    private router: Router,
    private teamService: TeamlistService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const res = this.teamService.getList();
    res.subscribe(res => {
      this.datas = res.data;
      console.log(id);
      console.log(this.datas);

      this.teamDisplay = this.datas.find(function(element:any) {
        return element.id === id;
      });
      console.log(this.teamDisplay);
    });
  }
    back(){
      this.router.navigate(['/teamslist'])
    }

}
