import { Component, OnInit } from '@angular/core';
import { TeamlistService } from '../teamlist.service';
import { TeamInterface } from '../team.interface';

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {

  teamList!: any;
  constructor(private teamlistService: TeamlistService) { }

  ngOnInit(): void {
    const result = this.teamlistService.getList();
    result.subscribe(result => {
      this.teamList = result.data;
      console.log(this.teamList)
    });

  }
  viewPost(id:string): void{
    console.log(id);
  }

}
