import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';
import { data } from 'src/app/data';
@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  list: any;
  dataa : data[] = [];
  constructor(private postservice:PostService) { }

  ngOnInit(): void {
    const res = this.postservice.getList().subscribe((post) => (this.dataa = post));
    console.log(res);
  }

}
