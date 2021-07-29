import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamlistComponent } from './teamlist/teamlist.component';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TeamlistComponent,
    HomeComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
