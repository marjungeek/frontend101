import { Component, OnInit } from '@angular/core';
import { PostInterface } from '../Post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts!: PostInterface[]  ;
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    const result =  this.postService.getList();
    result.subscribe(result => {
      this.posts = result;
    })
  }


}
