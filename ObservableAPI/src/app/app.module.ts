import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamlistComponent } from './components/teamlist/teamlist.component';
import { AppRoutingModule } from './app-routing.module';
import { UsingInjectComponent } from './components/using-inject/using-inject.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamsComponent,
    TeamlistComponent,
    UsingInjectComponent
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
