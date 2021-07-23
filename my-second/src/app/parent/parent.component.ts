import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  add:number = 0;

  post: any = [
    {status: 'print mo to'},
    {status: 'print mo sabi'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

 addpost(status:string){
 this.post.push({status:status})
}
addagain(){
  this.add++;
}

}
