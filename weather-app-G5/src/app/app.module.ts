import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponentComponent } from './search-component/search-component.component';
import { ForecastComponent } from './forecast/forecast.component';
import { HomeComponent } from './home/home.component';
import { ApiweatherComponent } from './apiweather/apiweather.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponentComponent,
    ForecastComponent,
    HomeComponent,
    ApiweatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
