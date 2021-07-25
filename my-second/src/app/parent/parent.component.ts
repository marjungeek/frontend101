import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  add:number = 0;

  post: any = [
    {status: 'pag di makasabay iwan mo'},
    {status: 'iwan, iwan, iwan'},

  ];

  constructor() { }

  ngOnInit(): void {
  }

 addpost(status:string){
   console.log(status, + 'charan')
  this.post.push({status:status})
}
addagain(){
  this.add++;
}

}
