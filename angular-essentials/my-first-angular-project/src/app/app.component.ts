import { Component } from '@angular/core';

/*@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'my-first-angular-project';
  name = 'RJ';

  // onUserInput(event: any) {
  //   this.name = event.target.value;
  // }
}


/*addEventListener('input', function(event) {
  ...
})*/
