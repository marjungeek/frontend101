import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MyComponent } from './profile.component';
//added this below
import { FormsModule } from '@angular/forms';
//end of added files
@NgModule({
  declarations: [
    MyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule //additional
  ],
  providers: [],
  bootstrap: [MyComponent] //change name from profile.component
})
export class MyModule { } //change and link to main.ts

