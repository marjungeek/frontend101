import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { HeaderComponent } from './header/header.component';
import { ChildContentComponent } from './child-content/child-content.component';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponentComponent,
    HeaderComponent,
    ChildContentComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
