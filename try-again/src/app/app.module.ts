import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProfileComponentComponent } from './component/profile-component/profile-component.component';
import { TextboxComponentComponent } from './component/textbox-component/textbox-component.component';
import { NewsfeedComponentComponent } from './component/newsfeed-component/newsfeed-component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponentComponent,
    TextboxComponentComponent,
    NewsfeedComponentComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
