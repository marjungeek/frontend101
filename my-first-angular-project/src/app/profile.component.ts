import { Component, Input } from '@angular/core';


@Component({
  selector: ' app-root',
  templateUrl: 'profile.component.html'
  // template:'
  // <p>Exercise</p>
  // <p> {{loadState}} </p>
  // <button (click)="(loadState='finished')"> Click Here </button>
  // <br>
  // <br>
  // <input name="user" type="text" [(ngModel)]="loadState">
  // '
})

export class ProfileComponent {
  title = 'Exercise #1';
  loadState = 'loading...';
}
