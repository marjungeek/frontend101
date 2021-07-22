import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ChildComponent1Component } from './child-component1/child-component1.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
