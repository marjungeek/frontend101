import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { SubComponent } from './sub/sub.component';
// import { ProfileComponent } from './profile.components';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    SubComponent, //ProfileComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
