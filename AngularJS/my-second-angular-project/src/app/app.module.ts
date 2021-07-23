import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsFeedComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
