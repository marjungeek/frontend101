import { Component } from '@angular/core';

@Component({
  selector: ' app-root',
  template: '
  <p>loadState :</p>
  <p id ="demo"> {{loading...}} </p>
  <button type = "button" onclick="loading()"> Click Here </button>'
})

export class ProfileComponent {
  function loading(){
    document.getElementById("demo")?.innerHTML = "finished";
  }
}
