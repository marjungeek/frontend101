import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component:  HomeComponent},
  {path: 'features', component:  FeaturesComponent},
  {path: 'post/:id', component:  PostComponent},
  {path: 'pricing', component:  PricingComponent},
  {path: 'post', component:  PostlistComponent},



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
