import { Component } from '@angular/core';

@Component({
  selector: 'profile-root',
  template: `
  {{loadState}}<br>
  <button (click)="onClickMe()">Click me!</button>
  `

})
export class ProfileComponent {
  title = 'my-first-angular-project';
  loadState = 'loading...';

  onClickMe() {
    if(this.loadState== 'loading...'){
      this.loadState = 'Finished';
    }else if(this.loadState == 'Finished'){
      this.loadState = 'loading...';
    }

  }
}
