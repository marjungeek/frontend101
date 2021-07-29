import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { TeamlistComponent } from './teamlist/teamlist.component';

const routes: Routes = [
  // {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'team/:team', component: TeamComponent},
  {path: 'teamlist', component:  TeamlistComponent},
  {path: 'home', component:  HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

