import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Movies } from '../../interfaces/movies.interfaces';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: Movies[];

  constructor( private router: Router ) { }

  ngOnInit(): void {
 
  }

  goMovie( movie: Movies ) {
    // console.log(movie);
    this.router.navigate(['/pelicula', movie.id]);
  }

}
