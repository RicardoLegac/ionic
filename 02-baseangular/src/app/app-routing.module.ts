import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';

import { Routes, RouterModule, Router } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  },
]
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot( routes )
    // CommonModule archivo para definicion de rutas, no vamos a usar aca
  ], 
  exports: [
    RouterModule//exportar la configuracion RuterModule
  ]
})
export class AppRoutingModule { }
