import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.css']
})
export class TeamListComponent implements OnInit {

  team:any;

  constructor(private APIService: APIService) { }

  ngOnInit(): void {

    this.APIService.getList().subscribe(result => {
      this.team =result.data;
      //console.log(result);
      //console.log(result.data);
    });

  }


}
