import { Component, OnInit, HostListener } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movies } from '../../interfaces/movies.interfaces';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
    this.moviesServices.getMoviesNowPlaying()
                    .subscribe( movie => {
                      this.movies = movie;
                      this.moviesSlide = movie;
                    });

  }

}
