import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamDetailsComponent } from './team-details/team-details.component';
import { TeamLikesComponent } from './team-likes/team-likes.component';
import { TeamlistComponent } from './teamlist/teamlist.component';

const routes: Routes = [
  { path: '',  pathMatch: 'full', redirectTo: 'home' },//At 1st Browser load it will go to 'home'
  { path: 'home', component: HomeComponent },
  { path: 'team-list', component: TeamlistComponent },
  // { path: 'team-list/:id', component: TeamDetailsComponent},//Not sure why ":id" is used
  // { path: 'team-likes', component: TeamLikesComponent},
  { path: 'team-list/team-likes/:id', component: TeamLikesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
