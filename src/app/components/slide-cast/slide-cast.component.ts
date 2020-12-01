import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { Cast } from '../../interfaces/credits.interface';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-slide-cast',
  templateUrl: './slide-cast.component.html',
  styleUrls: ['./slide-cast.component.css']
})
export class SlideCastComponent implements OnInit, AfterViewInit {

  @Input() cast: Cast[];

  constructor() { }

  ngOnInit(): void {
    console.log(this.cast);
  }

  ngAfterViewInit() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 5.3,
      freeMode: true,
      spaceBetween: 15
    })
  }

}
