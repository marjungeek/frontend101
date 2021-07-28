import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { DT } from '../interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})


export class PostListComponent implements OnInit {

  post!:DT[];
  constructor(private PostService: PostService) { }

  ngOnInit(): void {
    // const result = this.PostService.getList()
    // result.subscribe(result => {
    //   this.post =result;
    // });

    this.PostService.getList().subscribe(result => {
      this.post =result;
      console.log(result);
    });
  }


}
