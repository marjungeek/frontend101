import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, } from '@angular/router';
import { TeamlistComponent } from './components/teamlist/teamlist.component';
import { UsingInjectComponent } from './components/using-inject/using-inject.component';

const routes: Routes = [
  {path: 'team', component: TeamlistComponent},
  {path: 'using', component: UsingInjectComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
