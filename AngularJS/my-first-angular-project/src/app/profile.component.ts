import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  template: `
    <!-- <input name="user" type="text" (input)="onUserInput($event)" [value]="name"/> -binding of value-->
    <!-- <input name="user" type="text" (input)="onUserInput($event)" value = {{name}}/> -hardcoded binding-->
    <!-- two way-binding using ngModel -->
    <p></p><br><br>
    <p><b>{{ title }}</b></p>
    <p><b>{{ loadState }}</b></p>
    <button name="button" (click)="onClickEvent($event)">Load Me!</button><br>
    <p><b>{{ name }}</b></p>
    <input name="user" type="text" [(ngModel)]="name" /><br>


  `,
})
export class ProfileComponent {
  title = 'my-first-angular-project';
  name = 'Lawrence';
  loadState = 'loading...';

  onUserInput(event: any) {
    this.name = event?.target.value;
  }
  onClickEvent(event: any) {
    this.loadState = 'finished';
  }
}
