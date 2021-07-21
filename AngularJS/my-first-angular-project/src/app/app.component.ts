import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!-- <input name="user" type="text" (input)="onUserInput($event)" [value]="name"/> -binding of value-->
    <!-- <input name="user" type="text" (input)="onUserInput($event)" value = {{name}}/> -hardcoded binding-->
    <input name="user" type="text" [(ngModel)]="name" /> <!-- two way-binding using ngModel -->
    <p>{{ title }}</p>
    <p>{{ name }}</p>
  `,
})
export class AppComponent {
  title = 'my-first-angular-project';
  name = 'Lawrence';

  onUserInput(event: any) {
    this.name = event?.target.value;
  }
}
