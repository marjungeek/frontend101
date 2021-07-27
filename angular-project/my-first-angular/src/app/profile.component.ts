import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p>{{ title }}}</p>
  <p> loadstate {{ loadState }} </p>
  <input loadState="loading.." type="text" [(ngModel)]="loadState">
  <button (click)="clickComponent($event)">Click me!</button>
    `
})
export class profileComponent {
  title = 'Angular Button';
  loadState = 'loading..';

  clickComponent(event: any) {
   this.loadState = 'finished!';
  }
}
