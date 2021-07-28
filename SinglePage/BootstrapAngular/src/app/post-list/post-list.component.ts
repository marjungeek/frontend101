import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { data } from '../data';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  list: any;
  data: data[]=[];
  constructor(private ApiService: ApiServiceService) { }

  ngOnInit(): void {
   const result = this.ApiService.getList().subscribe((post) => (this.data = post));
    console.log(result);
  }
}
