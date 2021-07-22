import { Component } from '@angular/core';

@Component ({
selector: 'app-root',
template:`
       <p> {{loadstate}} </p>
      <input  type='text' (input)="onUserInput($event)" [value]= "loadstate" />
      <p>peek me</p>
      <button type="button" id="button" (click)="onUserInput($event)">Click</button>

`

})
export class AppComponent{
title = 'Angular';
loadstate = 'loading';

onUserInput(event:any){
   this.loadstate = event.target.value
   //this.
//   this.btnsubmit = document.getElementById('submit')
   }
}

// const btn  = document.getElementById('submit')
// btn.addEventListener('click', async function(event)



