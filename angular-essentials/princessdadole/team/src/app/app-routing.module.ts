import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamlistComponent } from './teamlist/teamlist.component';
import { TeamdetailsComponent } from './teamdetails/teamdetails.component';



const routes: Routes = [
  {path: '',pathMatch:'full',redirectTo: 'teamlist'},
  {path: 'teamdetails/:id', component: TeamdetailsComponent},
  {path: 'teamlist', component: TeamlistComponent},

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
