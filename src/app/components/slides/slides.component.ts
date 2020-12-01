import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Movies } from 'src/app/interfaces/movies.interfaces';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.css']
})
export class SlidesComponent implements OnInit, AfterViewInit {

  @Input() movies: Movies[];

  public mySwiper: Swiper;

  constructor() { }

  ngOnInit(): void { 
  }

  ngAfterViewInit() {
    this.mySwiper = new Swiper('.swiper-container', {
      loop: true
    });
  }

  nextSlide() {
    this.mySwiper.slideNext();
  }

  prevSlide() {
    this.mySwiper.slidePrev();
  }

}
