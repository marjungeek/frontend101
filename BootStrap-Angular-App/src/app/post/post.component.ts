import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';
import { Data } from './data';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post!: Data;

  constructor(private router: Router, private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    const result = this.postService.getPost(id);
    result.subscribe(data => {
      console.log(data);
      this.post = data;
    });
  }

  back(): void{
    this.router.navigate(['/posts']);
  }

}
