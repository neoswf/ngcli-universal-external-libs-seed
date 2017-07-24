import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  {
    path: 'about.html',
    component: AboutComponent,
    data: {
      animation: 'about'
    }
  },
  {
    path: '',
    component: HomeComponent,
    data: {
      animation: 'home'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
