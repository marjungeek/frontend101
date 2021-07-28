import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeatureComponent } from './feature/feature.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [

  {path: '', pathMatch: 'prefix' , component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'post-list', component: PostListComponent},
  {path: 'feature', component: FeatureComponent},
  {path: 'pricing', component: PricingComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
