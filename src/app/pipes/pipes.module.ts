import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagePosterPipe } from './image-poster.pipe';



@NgModule({
  declarations: [
    ImagePosterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ImagePosterPipe
  ]
})
export class PipesModule { }
