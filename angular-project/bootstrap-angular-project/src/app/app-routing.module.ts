import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PostComponent } from './post/post.component';
import { PostlistComponent } from './postlist/postlist.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'posts/:id', component: PostComponent},
  {path: 'posts', component: PostlistComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'pricing', component: PricingComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
