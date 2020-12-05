import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../interfaces/movies.interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  public movies: Movies[] = [];
  public moviesSlide: Movies[] = [];

  @HostListener('window:scroll', ['$event'])
  scrollWindow() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) * 1.5;
    const max = (document.documentElement.scrollHeight || document.body.scrollHeight);

    if( this.moviesServices.cargando ) { return; }

    if ( pos > max ) {
      this.moviesServices.getMoviesNowPlaying()
                  .subscribe( movie => { 
                    this.movies.push(...movie);
                  } );
    }

  }

  constructor( private moviesServices: MoviesService ) { }

  ngOnInit(): void {

    if( localStorage.getItem('posterPeliculas') && localStorage.getItem('slidePeliculas') && localStorage.getItem('pageCounter') ) {
      this.movies = JSON.parse(localStorage.getItem('posterPeliculas'));
      this.moviesSlide = JSON.parse(localStorage.getItem('slidePeliculas'));
      this.moviesServices.pageCounter = JSON.parse( localStorage.getItem('pageCounter') )
    } else {
      this.moviesServices.getMoviesNowPlaying()
            .subscribe( movie => {
              this.movies = movie;
              this.moviesSlide = movie;
            });
    }

  }

  ngOnDestroy() {
    localStorage.setItem('posterPeliculas', JSON.stringify(this.movies));
    localStorage.setItem('slidePeliculas', JSON.stringify(this.moviesSlide));
    localStorage.setItem('pageCounter', JSON.stringify(this.moviesServices.pageCounter));
    this.moviesServices.pageCounter = 1;
  }

}
