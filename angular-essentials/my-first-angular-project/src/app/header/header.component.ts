import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isValidUser: boolean = false;
  loggedOutMessage: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  loggIn(username: string, password: string){
    //api logic to validate
    this.isValidUser = true;
  }

  onLogOut(data: boolean){
    console.log(`is logged out? ${data}`);
    this.loggedOutMessage = 'User Signout!!';
    this.isValidUser = data;
  }

}
