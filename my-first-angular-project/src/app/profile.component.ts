import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

@Component({
  selector: 'app-profile-component',
  template:`
    <p>This is my work :D</p>
    <button (click)="onClick($event)" >Click me</button>
    <p>{{loadState}}</p>
    <input placeholder="text here" [(ngModel)]="textfield"  (input)="input($event)">
    <p>{{textfield}}</p>



  `

})

export class ProfileComponent {
  loadState:string = "loading...";
  textfield:string = "";
  label!:string;

  onClick(event:any){
    this.loadState = event.target.value="finished";
  }
  input(event:any){
    this.label = event.target.value;
  }
}



