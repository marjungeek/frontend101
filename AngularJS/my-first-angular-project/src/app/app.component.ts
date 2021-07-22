import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'my-first-angular-project';
  name = 'Lawrence';
  loadState = 'loading...';

  onUserInput(event: any) {
    this.name = event?.target.value;
  }
  onClickEvent(event: any) {
    this.loadState = 'finished';
  }
}
