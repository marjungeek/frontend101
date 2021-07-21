import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {
  title = 'profile component sample';
  loadstate = 'loading...';
  constructor() { }

  ngOnInit(): void {
  }

buttonclick(){
  this.loadstate = 'finished...';
}


}
