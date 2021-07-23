import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './parent/parent.component';
import { Variable } from '@angular/compiler/src/render3/r3_ast';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    Variable
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
