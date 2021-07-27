import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Import the two components that we made; Home and About. Also import the first line below this
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [//Added all this one as well
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
]

@NgModule({//Listens for browser URL changes
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),//Added this as well
    CommonModule
  ],
  exports: [RouterModule]//Added this as well
})
export class AppRoutingModule { }
