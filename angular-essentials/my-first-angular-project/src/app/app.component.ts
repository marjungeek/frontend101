import { Component } from '@angular/core';

/*@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})*/
@Component({
  selector: 'app-root',
  template: `
    <!-- input name="user" type="text" (input)="onUserInput($event)" [value]="name" /> <!-- event listener -->
    <input name="user" type="text" [(ngModel)]="name" > <!-- two-way binding / directives ngModel -->
    <p>Hello world, not from a template!</p>
    <p>Another line</p>
    <p>{{ title }}</p> <!-- string interpolation -->
    <p>My name is {{ name }}</p> <!-- string interpolation -->
  `
})
export class AppComponent {
  title = 'my-first-angular-project';
  name = 'RJ';

  // onUserInput(event: any) {
  //   this.name = event.target.value;
  // }
}


/*addEventListener('input', function(event) {
  ...
})*/
