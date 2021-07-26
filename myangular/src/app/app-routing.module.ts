import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ProfileComponentComponent } from './profile-component/profile-component.component'
import { HeaderComponent } from './header/header.component';
import { Exercise3Component } from './exercise3/exercise3.component';



const routes: Routes = [
{path: 'profile-component', component:ProfileComponentComponent},
{path: 'header', component:HeaderComponent},
{path: 'exercise3', component: Exercise3Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
