import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';
import { HomeComponent } from './home/home.component';
import { PostListComponent } from './post-list/post-list.component';
import { PricingComponent } from './pricing/pricing.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'posts/:id', component: PostComponent },
  { path: 'posts', component: PostListComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'pricing', component: PricingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
