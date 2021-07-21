import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*
<input type="text" name="user" (input)="someEvent($event)"          [value]="name" />
                                Above is listener angular style     binding??

<input name="user" type="text" [(ngModel)]="name" />
                            Above is called directive(Same function as above code?)(Called two-way binding)

templateUrl: '<p>{{ title }}</p>' string interpolation
*/

export class AppComponent {
  title = 'first-angular-project';
}
