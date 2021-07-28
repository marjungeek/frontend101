import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  index:number=NaN;
  post: any='nothing!';

  constructor(private route: ActivatedRoute,private postService: PostService) { }

  ngOnInit(): void {
    const id=this.route.snapshot.paramMap.get('id');
    console.log('in post init id: ',id);
    // this.index=this.postService.index;
    // console.log('in post init index:',this.index);
    //this.post=event[this.index];
    //this.index= id;
    const res=this.postService.getList();
    res.subscribe((event)=>{
      if(id != null){
        this.post=event[parseInt(id)-1];
      }else{
        console.log('id is null');
      }

    });

      // console.log(event[1]);
      // console.log(typeof(this.index),this.index);

  }

}
