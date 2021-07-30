import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamListComponent } from './team-list/team-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamListComponent,
    NavbarComponent,
    HomeComponent,
    ButtonComponent
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
