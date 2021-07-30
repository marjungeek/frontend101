import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
{path:'', pathMatch:'full', redirectTo:'home'},
{path: 'teamlist', component:TeamListComponent},
{path:'home', component:HomeComponent},
{path: 'teamlist/:team', component: TeamComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }