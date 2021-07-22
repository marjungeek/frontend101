import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';


@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  //using input decorator
  @Input() isUserLoggedIn: boolean = false; //child listener
  @Output() isUserLoggedOut = new EventEmitter<boolean>(); //parent listener

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

  logoutMethod(): void {
    this.isUserLoggedIn = false;
    this.isUserLoggedOut.emit(this.isUserLoggedIn);
  }

  addNewUser(firstName: string, favColor: string){
    console.log('testing')
    this.listOfNames.push({firstName: firstName, favColor: favColor}); //dom manipulations
    //push database
  }

}
