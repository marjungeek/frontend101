import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TeamlistComponent } from './teamlist/teamlist.component';
import { TeamLikesComponent } from './team-likes/team-likes.component';

import { HttpClientModule } from '@angular/common/http';
import { TeamDetailsComponent } from './team-details/team-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    TeamlistComponent,
    TeamLikesComponent,
    TeamDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
