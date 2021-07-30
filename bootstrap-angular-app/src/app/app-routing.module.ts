import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PostlistComponent } from './postlist/postlist.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './pricing/pricing.component';
import { FeaturesComponent } from './features/features.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'postlist' , component: PostlistComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'app', component: HomeComponent },
  {path: 'pricing' , component: PricingComponent},
  {path: 'features' , component: FeaturesComponent},
  {path: 'postlist/:id', component: PostComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
