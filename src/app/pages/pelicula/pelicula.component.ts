import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { MovieSelected } from 'src/app/interfaces/moiveselected.interfece';
import { MoviesService } from '../../services/movies.service';
import { Cast } from '../../interfaces/credits.interface';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public cast: Cast[] = [];

  public movie: MovieSelected;

  constructor(  private activatedRoute: ActivatedRoute,
                private movieServices: MoviesService,
                private location: Location
    ) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params;


    // Combina multiples observables y se suscribe a todos ellos como si fuera uno 
    // Obteniendo de la misma manera la respuesta de cada uno de manera individual 
    combineLatest([
      this.movieServices.getMovie( id ),
      this.movieServices.getMovieCast( id )
    ]).subscribe( ([pelicula, cast])=> {
      this.movie = pelicula;
      this.cast = cast.filter( actor => actor.profile_path !== null );
    })

    // Forma tradicional
    /*
    this.movieServices.getMovie( id ).subscribe( res=> {
      this.movie = res;
    });

    this.movieServices.getMovieCast( id ).subscribe(res => {
      this.cast = res.filter(actor => actor.profile_path !== null);
    });
    */
    
    


  }

  returnPage() {
    this.location.back();
  }

}
