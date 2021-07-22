import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

  <p>{{ mensahe }}</p>
  <p>Ako si {{ pangalan }}</p>

  <p> {{loadState}} </p>

  <input type="text" [(ngModel)] = "loadState"  ><br /><br />
  <button type="button" (click)="onUserClick()" >Try Me<button>

  `
})

export default class ProfileComponent{
  mensahe = 'Wazzap Madlang Pipol';
  pangalan = 'Peri.';

  loadState = 'Something is loading...'

  onUserClick(){
    this.loadState= 'finished!';
  }
}
