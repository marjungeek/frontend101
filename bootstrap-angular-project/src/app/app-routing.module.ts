import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PostListComponent } from './post-list/post-list.component';
import { PricingComponent } from './pricing/pricing.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', component: HomeComponent},
  {path: 'features', component: FeaturesComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'pricing', component: PricingComponent},
  {path: 'posts/:id', component: PostsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
