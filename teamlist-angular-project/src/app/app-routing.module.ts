import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamComponent } from './components/team/team.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'team', component:TeamComponent},
  {path: 'team/:team', component:TeamInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
