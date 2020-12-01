import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { PipesModule } from '../pipes/pipes.module';
import { RatingModule } from 'ng-starrating';

import { HomeComponent } from './home/home.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    HomeComponent, 
    PeliculaComponent, 
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    PipesModule,
    RatingModule
  ],
  exports: [
    HomeComponent, 
    PeliculaComponent, 
    SearchComponent
  ]
})
export class PagesModule { }
