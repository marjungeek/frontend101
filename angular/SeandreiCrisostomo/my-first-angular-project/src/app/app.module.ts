import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponent } from './profile.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ProfileComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }