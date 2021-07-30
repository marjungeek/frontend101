import { Component, OnInit } from '@angular/core';
import { Post } from './post.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posti!: Post;

  constructor(private router: Router, private route: ActivatedRoute, private postService:  PostService) { }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    const result = this.postService.getPost('id');
    result.subscribe(data => {
      console.log(data);
      this.posti = data;
    });
  }
  back() {
    this.router.navigate(['/postlist']);
  }
}
// back() {
//   this.router.navigate(['/postlist']);
// }