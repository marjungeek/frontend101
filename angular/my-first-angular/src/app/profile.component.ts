import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p>{{ title }}}</p>
  <p> loadstate {{ loadState }} </p>
    <button (click)="clickme()">Click me!</button>
    <input name="load" type="text" [()]="loadState">
    `
})
export class profileComponent {
  title = 'Angular Button';
  loadState = 'loading..';

  clickme() {
    this.loadState = 'finished!';
  }
}
