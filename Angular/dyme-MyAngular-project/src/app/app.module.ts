import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularEx1Component } from './angular-ex1/angular-ex1.component';

import { FormsModule } from '@angular/forms';
import { AngularEX2ParentComponent } from './angular-ex2-parent/angular-ex2-parent.component';
import { AngularEX2ChildComponent } from './angular-ex2-child/angular-ex2-child.component';
import { MenuComponent } from './menu/menu.component';
import { EX3TeamComponent } from './ex3-team/ex3-team.component';
import { EX3TeamlistComponent } from './ex3-teamlist/ex3-teamlist.component';
import { AppRoutingModule } from './app-routing.module';
import { DefaultComponent } from './default/default.component';
import { PNFComponent } from './pnf/pnf.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularEx1Component,
    AngularEX2ParentComponent,
    AngularEX2ChildComponent,
    MenuComponent,
    EX3TeamComponent,
    EX3TeamlistComponent,
    DefaultComponent,
    PNFComponent

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
