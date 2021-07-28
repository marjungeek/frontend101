import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { PostInterface } from '../post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  post!:PostInterface;
  id:any;
  title:any
  body:any
  sub:any;
  constructor(private _Activatedroute:ActivatedRoute,
    private _router:Router,
    private _postService:PostService) { }

  ngOnInit(): void {

    this.sub=this._Activatedroute.paramMap.subscribe(params => {
       this.id = params.get('id');
       console.log(this.id);
       const result = this._postService.getPost(this.id);
       result.subscribe(result=>{
         this.post=result;
       })
   });
  }

}
