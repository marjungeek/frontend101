import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { PostInterface } from '../post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  list!: PostInterface [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    const result = this.postService.getList();
    result.subscribe(result =>{
      this.list= result;

    })
  }

}
