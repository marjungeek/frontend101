import { profileComponent } from '@angular/core';

@profileComponent ({
  selector: 'app-root',
  template: `
  <button type="submit" (click)="onClick($event)">Click!</button>

  <p>loadstate {{ loadState }}</p>

  `
})

export class clickfinishedComponent {
  loadState = 'loading..';
  onClick($event: any){
    this.loadState = 'finished';
  }
}
