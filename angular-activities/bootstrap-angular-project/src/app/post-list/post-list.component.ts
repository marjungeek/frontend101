import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service'
import { data } from 'src/app/data'
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  posts!: data[];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    const result = this.postService.getList();
    result.subscribe(result => {
      this.posts = result;
    })
  }

}
