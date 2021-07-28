import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from 'src/app/post.service';
import { data } from 'src/app/data';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  list: any = [];
  dataa : data = {
    userId : '',
    id : '',
    title : '',
    body : '',
  }
  tryLang: string = '';
  car = {type:"Fiat", model:"500", color:"white"};
  constructor(private router: Router ,private route: ActivatedRoute, private service: PostService) { }

  ngOnInit(): void {
    const id:any = this.route.snapshot.paramMap.get('id')!;
    const result = this.service.getPost(id);
    result.subscribe(data=>{
      console.log(data);
      this.dataa = data;
      console.log(this.dataa);
    });
  }
  back(){
    this.router.navigate(['/post'])
  }
}
