import { Component, OnInit } from '@angular/core';
import { ListInterface } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {

  list!: ListInterface[];

  constructor(public postService: PostService) { }

  ngOnInit(): void {
    const result = this.postService.getList();
    result.subscribe(result => {
      this.list = result;
    })
  }

  viewPost(id: number): void {
    console.log(id);
  }

}
