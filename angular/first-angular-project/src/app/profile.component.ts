import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <p>{{ title }}</p>
  <p>{{ loadState }}</p>
  <button name="clickEvent" (click)="someEvent($event)"></button>

  <input name="userChangeLoadState" type="text" [(ngModel)]="loadState" >
  <!--
  Error on line 10, I tried to create new profile.module.ts, I think I fixed it??
  Now need to know how to display it on the browser
-->
  `
})



export class ProfileComponent {
  title = 'Profile Component Trial';
  loadState = 'loading...';

  someEvent(event: any){
    this.loadState = 'finished';
  }
}
