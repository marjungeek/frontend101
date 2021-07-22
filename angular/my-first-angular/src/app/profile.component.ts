import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p>{{ title }}}</p>
  <p> loadstate {{ loadState }} </p>
  <input name="load" type="text" [(ngModel)]="loadState">
  <button (click)="clickComponent()">Click me!</button>
    `
})
export class profileComponent {
  title = 'Angular Button';
  loadState = 'loading..';

  clickComponent() {
    this.loadState = 'finished!';
  }
}
