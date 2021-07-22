import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
  <p>{{ title }}</p><hr/>
  <p>Load State: {{ loadState }}</p>
  <button name="clickEvent" (click)="someEvent($event)">Finished</button>
  <hr/>
  <p>Type something below!</p>
  <input name="userChangeLoadState" type="text" [(ngModel)]="loadState" >
  </div>
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
