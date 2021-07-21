import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })

@Component({
  selector: 'app-root',
  template:`
    <p>This is my work :D</p>
    <p>{{loadState}}</p>
    <input name="click me" type="button" (input)="onclick(event:any)">
  `

})

export class ProfileComponent {
  loadState = "loading...";

  onclick(event:any){
    this.loadState = event.target.value;
  }
}



