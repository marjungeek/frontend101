import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { dataname } from '../data'

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  posts:dataname[]=[];

  constructor( private postService: PostService) { }

  ngOnInit(): void {
    const result = this.postService.getList();
    result.subscribe(result => {
      this.posts = result;
    })
  }

  viewPost(id: number): void{

  }
}
