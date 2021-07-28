import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostlistComponent } from './components/postlist/postlist.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { HomeComponent } from './components/home/home.component';
import { FeaturesComponent } from './components/features/features.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'post', component: PostlistComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'features', component: FeaturesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
