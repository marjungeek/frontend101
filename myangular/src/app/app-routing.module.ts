import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ProfileComponentComponent } from './profile-component/profile-component.component'
import { HeaderComponent } from './header/header.component';


const routes: Routes = [
{path: 'profile-component', component:ProfileComponentComponent},
{path: 'header', component:HeaderComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
