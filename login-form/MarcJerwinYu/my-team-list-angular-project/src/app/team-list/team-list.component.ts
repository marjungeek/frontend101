import { Component, OnInit } from '@angular/core';
import { DataInterface } from '../data';
import { TeamlistService } from '../teamlist.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  post! : DataInterface [];

  constructor(private TeamlistService : TeamlistService) { }

  ngOnInit(): void {
    const result = this.TeamlistService.getList();
    result.subscribe(result => {
      this.post = result.data;
      console.log(this.post);
    })
  }

}
