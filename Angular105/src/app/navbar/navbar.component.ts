import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  likes:number=0;

  constructor() { }

  ngOnInit(): void {
  }

  addLikes(gusto:number=1){
    this.likes++;
  }

}
