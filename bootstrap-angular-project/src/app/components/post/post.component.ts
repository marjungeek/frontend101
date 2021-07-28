import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  list: any = [];
  constructor(private router: Router ,private route: ActivatedRoute, private service: PostService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    const result = this.service.getPost(id);
    result.subscribe(data=>{
      console.log(data);
      this.list = data;
      console.log(this.list);
    });
  }
  back(){
    this.router.navigate(['/post'])
  }
}
