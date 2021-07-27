import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamListComponent } from './team-list/team-list.component';
import { TeamComponent } from './team/team.component';
import { Router, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'team', component: TeamComponent},
  { path: 'team-list', component: TeamListComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
