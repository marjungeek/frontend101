import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import {data} from '../interfaces';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  data: data[]=[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    const result = this.postService.getList().subscribe((post) => (this.data = post));
    console.log(result);
  }

  viewPost(id:number):void{
    console.log(id)

  }

}
