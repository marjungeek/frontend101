import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';
import { AngularEx1Component } from './angular-ex1/angular-ex1.component';
import { AngularEX2ParentComponent } from './angular-ex2-parent/angular-ex2-parent.component';
import { EX3TeamlistComponent } from './ex3-teamlist/ex3-teamlist.component';
import { DefaultComponent } from './default/default.component';
import { PNFComponent } from './pnf/pnf.component';

const routes: Routes=[
  {path: 'Home/Ex1',component: AngularEx1Component},
  {path: 'Home/Ex2',component: AngularEX2ParentComponent},
  {path: 'Home/Ex3',component: EX3TeamlistComponent},
  {path: 'Home',component: DefaultComponent},
  {path: '',   redirectTo: '/Home', pathMatch: 'full' },
  {path: '**', component:  PNFComponent}
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
