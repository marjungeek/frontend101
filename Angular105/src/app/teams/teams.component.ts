import { Component, OnInit } from '@angular/core';

import { ListService } from '../list.service';
import { data } from '../interface';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  data: data[]=[];
  team: any;
  constructor(private listService : ListService) { }

  ngOnInit(): void {
    const result = this.listService.getList().subscribe((post) => (this.team=post));
    console.log(result);
  }

}
