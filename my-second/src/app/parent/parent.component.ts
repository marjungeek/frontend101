import { Variable } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  post: any = [
    {Comment: 'sentence'},
  ];

  constructor() { }

  ngOnInit(): void {
    this.loadpost();
  }

  loadpost(){
    this.post()
  }

  submit(){
    console.log('testing')
    this.post.push({});
  }


}
