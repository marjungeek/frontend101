import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ListService } from '../list.service';


@Component({
  selector: 'app-teamdetails',
  templateUrl: './teamdetails.component.html',
  styleUrls: ['./teamdetails.component.css']
})
export class TeamdetailsComponent implements OnInit {

  tddata:any;
  tddata1:any;

  constructor(private router:Router, private route:ActivatedRoute, private listService: ListService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('team');
    const result = this.listService.pushList(id);
    result.subscribe(data => {
    this.tddata =data
    this.tddata1=this.tddata.data,
    console.log(this.tddata1)
  });
  }

}
