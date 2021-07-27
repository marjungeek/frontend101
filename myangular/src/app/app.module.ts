import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ProfileComponentComponent } from './profile-component/profile-component.component';
import { HeaderComponent } from './header/header.component';
import { ChildContentComponent } from './child-content/child-content.component';
import { MenuComponent } from './menu/menu.component';
import { Exercise3Component } from './exercise3/exercise3.component';


// ANGULAR MATERIAL COMPONENTS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card'
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { TeamListComponent } from './exercise3/team-list/team-list.component';
import { TeamComponent } from './exercise3/team/team.component';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponentComponent,
    HeaderComponent,
    ChildContentComponent,
    MenuComponent,
    Exercise3Component,
    TeamListComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatSnackBarModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
