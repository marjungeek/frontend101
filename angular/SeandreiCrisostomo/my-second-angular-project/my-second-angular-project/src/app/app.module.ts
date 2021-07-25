import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentCompComponent,
    ChildCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
