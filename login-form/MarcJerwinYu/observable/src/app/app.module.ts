import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamListComponent,
    TeamComponent,
    HomeComponent,
    FormComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
