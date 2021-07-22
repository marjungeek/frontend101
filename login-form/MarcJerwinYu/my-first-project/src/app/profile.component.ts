import { NgModel } from "@angular/forms";
import { Component } from "@angular/core";

@Component({
  selector: 'app-profile-component',
  template: `
    <input name="user" type="text" [(ngModel)]="name" />
    <p>{{ title }}</p>
    <p>My name is {{ name }}<p>
    <input name ="user" type="text" [{ngModel}]="loadstate"/> <br>
    <button type="button" id="btn" (click)="onClickEvent($event)">Click</button>
    `
})

export class ProfileComponent {
  title = 'my-first-angular-project';
  name = 'Jerwin'
  loadstate = 'loading';

  onUserInput(event: any) {
    this.name = event.target.value;
  }
  onClickEvent(event: any) {
    this.loadstate = 'finished';
  }
}
