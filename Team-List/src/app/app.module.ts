import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { TeamListingComponent } from './team-listing/team-listing.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    TeamListingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
