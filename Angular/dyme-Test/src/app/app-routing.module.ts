import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { PricingComponent } from './pricing/pricing.component';
import { PostListComponent } from './post-list/post-list.component';
import { PNFComponent } from './pnf/pnf.component';
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';


const routes: Routes = [
  {path: '', redirectTo: '/Home', pathMatch: 'full'},
  {path: 'Post', component: PostListComponent},
  {path: 'Post/:id', component: PostComponent},
  {path: 'Home', component: HomeComponent},
  {path: 'Features', component: FeaturesComponent},
  {path: 'Pricing',component: PricingComponent},
  {path: '**', component: PNFComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
