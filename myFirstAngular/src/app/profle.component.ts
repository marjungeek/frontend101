import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>{{ loadstate }}</p>
    <button type="button">Click Me!</button>
  `
})
export class AppComponent {
  title = 'myFirstAngular';
  loadstate = 'loading';
}
