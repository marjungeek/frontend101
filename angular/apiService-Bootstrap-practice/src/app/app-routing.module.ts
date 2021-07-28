import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},//Redirects to this page at first load
  { path: 'home', component: HomeComponent},
  { path: 'post-list', component: PostListComponent},
  { path: 'features', component: FeaturesComponent},
  { path: 'pricing', component: PricingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
