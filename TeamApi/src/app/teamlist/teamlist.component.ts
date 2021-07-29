import { Component, OnInit } from '@angular/core';
import { data } from 'src/app/interface'
import { ApiService } from '../api.service';

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {
  post! : data[];
  constructor(private ApiService : ApiService) { }

  ngOnInit(): void {
    const result = this.ApiService.getList();
    result.subscribe(result => {
      this.post = result.data;
    });
  }
}
