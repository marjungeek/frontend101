import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <p> Hello! </p>
    <input name="user" type="text" [( ngModel )]="loadState">
    <p> {{ loadState }} </p>
    <button (click)="(loadState='finished')"> Click the button </button>

  `

})
export class ProfileComponent {
loadState = "loading...";
name = "Megan";
}
