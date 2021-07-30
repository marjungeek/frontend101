import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { TeamlistComponent } from './teamlist/teamlist.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'teamslist', component: TeamlistComponent},
  {path: 'teamslist/:id', component: TeamComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
