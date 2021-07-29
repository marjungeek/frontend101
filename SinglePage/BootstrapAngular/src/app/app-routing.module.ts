import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NewsComponent } from './news/news.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostComponent } from './post/post.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'post/id', component: PostComponent},
  {path: 'home', component: HomeComponent},
  {path: 'post', component: PostListComponent},
  {path: 'about', component: AboutComponent},
  {path: 'news', component: NewsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
