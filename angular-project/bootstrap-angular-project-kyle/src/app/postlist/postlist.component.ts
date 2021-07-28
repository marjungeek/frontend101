import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { data } from '../data';

@Component({
  selector: 'app-postlist',
  templateUrl: './postlist.component.html',
  styleUrls: ['./postlist.component.css']
})
export class PostlistComponent implements OnInit {
  data: data[]=[];
  List:any;
  constructor(private postService: PostService) { }


  //-------------------------normal way of
//   ngOnInit(): void {
//     const result = this.postService.getList();
// result.subscribe(result => {
// this.List = result
// })

//   }


// ngOnInit(): void {
//   const result = this.postService.getList().subscribe((post) => (this.data = post));
//   console.log(result);

// }

  ngOnInit(): void {
    const result = this.postService.getList();
    result.subscribe(result => {
  this.data = result
})

  }

// viewPost(id:number): void{
// console.log(id);
// }


}// end of class
