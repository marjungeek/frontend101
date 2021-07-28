import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { postInterface } from '../postInterface';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

post! : postInterface [];
  constructor(private postService: PostService) { }

  ngOnInit(): void {
    const result = this.postService.getList();
    result.subscribe(result => {
      this.post = result;
    })
  }

}
