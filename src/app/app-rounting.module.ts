import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }  from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { SearchComponent } from './pages/search/search.component';

const routes : Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pelicula/:id', component: PeliculaComponent },
  { path: 'search/:text', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: '/home' }
]


@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ], 
  exports: [
    RouterModule
  ]
})
export class AppRountingModule { }
