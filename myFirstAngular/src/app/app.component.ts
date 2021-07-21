import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<p>{{loadstate}}</p>'
})
export class AppComponent {
  title = 'myFirstAngular';
  loadstate = 'loading';
}
