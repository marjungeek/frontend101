import { Component, OnInit } from '@angular/core';
import { TeamlistService } from '../teamlist.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  like : number = 0;

  constructor() { }

  ngOnInit(): void {

  }
  addLike() {
    this.like++;
    console.log(this.like);
  }

}
