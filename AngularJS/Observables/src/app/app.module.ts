import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { TeamListComponent } from './team-list/team-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
