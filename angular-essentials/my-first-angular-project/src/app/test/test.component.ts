import { Component, OnInit, } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  
  isLogin: boolean = false;
  // firstName: string;
  // favColor: string;

  listOfNames:any = [
        { firstName: 'Raven', favColor: 'SkyBlue'}, 
        { firstName: 'Dyme', favColor: 'Pink'},
        { firstName: 'Megan', favColor: 'Yellow'},
        { firstName: 'Princess', favColor: 'Black'},
      ];

  constructor() { 
    
  }

  ngOnInit(): void {
    console.log(this.listOfNames);
  }

  loginMethod(): void {
    this.isLogin = true;
  }

  logoutMethod(): void {
    this.isLogin = false;
  }

  addNewUser(firstName: string, favColor: string){
    console.log('testing')
    this.listOfNames.push({firstName: firstName, favColor: favColor}); //dom manipulations
    //push database
  }

}
