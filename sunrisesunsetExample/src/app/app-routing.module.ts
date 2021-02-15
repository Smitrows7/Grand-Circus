import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SunriseComponent } from './sunrise/sunrise.component';
import { SunsetComponent } from './sunset/sunset.component';

const routes: Routes = [
  //blank path is the default or home
  {path:'',component: HomeComponent},
  {path:'sunrise',component: SunriseComponent},
  
  {path:'sunset',component: SunsetComponent},
  //wildcard
  {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
