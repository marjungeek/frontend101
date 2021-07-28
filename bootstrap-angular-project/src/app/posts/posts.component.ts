import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';
import { Posts } from './posts.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts!: Posts;
  constructor(private router: Router, private route: ActivatedRoute, private postService: PostService ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    const result = this.postService.getPost('id');
    result.subscribe(data => {
      console.log(data);
      this.posts = data;
    });
  }

  back() {
    this.router.navigate(['/posts']);
  }

}
