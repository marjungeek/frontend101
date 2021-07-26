import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  //addnewPosts: boolean = false;

  addChika: any = [
    { newChismis: 'Mare, may chika ako!'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

  //newPosts: string = "New Post";

  pindot(newChismis: string) {
    console.log('new post');
    this.addChika.unshift({newChismis: newChismis});
  }
}
