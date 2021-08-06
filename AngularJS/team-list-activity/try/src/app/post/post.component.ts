import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styles: [
    `
      #likebutton {
        float: right;
      }
      .container {
        color: blue;
      }
    `,
  ],
})
export class PostComponent implements OnInit {
  datas: any;
  result: any;
  @Output() sum = new EventEmitter<any>();
  Likes: number = 0;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    const data = this.route.snapshot.paramMap.get('id')!;
    const result = this.postService.getList();
    result.subscribe((result) => {
      this.datas = result.data;
      console.log(this.datas);

      this.result = this.datas.find(function (element: any) {
        return element.id === data;
      });
    });
  }

  back() {
    this.router.navigate(['/team']);
  }

  liked() {
    this.Likes++;
    console.log(this.Likes);
    this.sum.emit(this.Likes);
  }
}

