import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RatingModule } from 'ng-starrating';
import { PipesModule } from '../pipes/pipes.module';

import { NavComponent } from './nav/nav.component';
import { SlidesComponent } from './slides/slides.component';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';
import { SlideCastComponent } from './slide-cast/slide-cast.component';



@NgModule({
  declarations: [
    NavComponent, 
    SlidesComponent, 
    PeliculasPosterGridComponent, 
    SlideCastComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RatingModule,
    PipesModule,
  ],
  exports: [
    NavComponent,
    SlidesComponent,
    PeliculasPosterGridComponent,
    SlideCastComponent
  ]
})
export class ComponentsModule { }
