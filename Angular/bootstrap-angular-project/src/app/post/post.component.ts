import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post:any;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    const result = this.post = this.postService.getPost(id);
     result.subscribe(data => {
     this.post = data;
   });
  }
  back() : void{
    this.router.navigate(['/posts']);
  }

}
