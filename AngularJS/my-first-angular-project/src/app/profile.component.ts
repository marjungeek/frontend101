import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  template: `
    <!-- <input name="user" type="text" (input)="onUserInput($event)" [value]="name"/> -binding of value-->
    <!-- <input name="user" type="text" (input)="onUserInput($event)" value = {{name}}/> -hardcoded binding-->

    <input name="user" type="text" [(ngModel)]="name" /><br><br><br>
    <!-- two way-binding using ngModel -->
    <p><b>{{ title }}</b></p>
    <p><b>{{ name }}</b></p>
    <p><b>{{ loadState }}</b></p>
    <input name="user" type="text" [(ngModel)]="loadState" /><br /><br />
    <button type="button" (click)="onClickEvent($event)">Load Me!</button>

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
