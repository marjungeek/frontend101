import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { myData } from '../interface';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {


  posts!: myData[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {

    const result = this.postService.getList();
    result.subscribe(result => {
      this.posts = result;
    })

  }

}
