import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagePoster'
})
export class ImagePosterPipe implements PipeTransform {

  transform(value: string): string {

    if( value ){
      return 'https://image.tmdb.org/t/p/w500'+ value;
    } else {
      return '../../assets/no-image.jpg'
    }
  }

}
