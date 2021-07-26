import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { HeaderComponent } from './header/header.component';
import { ChildContentComponent } from './child-content/child-content.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { Exercise3Component } from './exercise3/exercise3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponentComponent,
    HeaderComponent,
    ChildContentComponent,
    MenuComponent,
    Exercise3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
