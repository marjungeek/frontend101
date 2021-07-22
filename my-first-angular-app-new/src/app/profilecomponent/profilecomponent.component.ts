import { Component } from '@angular/core';

@Component({
  selector: 'app-profilecomponent',
  template: `
  <p>1<sup>st</sup> Exercise in Angular</p>
  <p>{{ loadState }}</p>
  <button (click)="(loadState='finished')">Click Me!</button> <br> <br>
  <input type="text" [(ngModel)]="loadState">

  `

})
export class ProfilecomponentComponent {
  title = '1st Exercise in Angular';
  loadState = 'loading...';


}
