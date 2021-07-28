import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles:[`
    .container{
      color: blue;
    }
  `]

})
export class PostComponent implements OnInit {
  post: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    const result = this.postService.getPost(id);

    result.subscribe(data => {
      console.log(data);
      this.post = data;
    });
  }

  back(){
    this.router.navigate(['/posts']);
  }
}
