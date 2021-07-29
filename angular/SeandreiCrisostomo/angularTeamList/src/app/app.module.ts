import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamContentComponent } from './team-content/team-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    TeamListComponent,
    TeamContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule //need ilagay for access
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
