import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';
import { MoviePlayingNow, Movies } from '../interfaces/movies.interfaces';
import { MoviesSearchResults, SearchMovie } from '../interfaces/search.interface';
import { MovieSelected } from '../interfaces/moiveselected.interfece';
import { Cast, MovieCredits } from '../interfaces/credits.interface';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private baseUrl: string = 'https://api.themoviedb.org/3';
  public pageCounter: number = 1;
  public cargando: boolean = false;

  get params() {
    return {
      api_key: '4608f9c6ae490aa624e937d77f7ba884',
      language: 'es-ES',
      page : this.pageCounter.toString()
    }
  }

  constructor( private http: HttpClient ) { }

  getMoviesNowPlaying(): Observable<Movies[]> {

    if( this.cargando ) { 
      return of([]); 
    }

    this.cargando = true;

    return this.http.get<MoviePlayingNow>(`${ this.baseUrl }/movie/now_playing`, {
      params: this.params
    }).pipe(
      tap( () => {
        this.pageCounter += 1;
        this.cargando = false;
      }),
      map(res => res.results )
    )
  }

  searchMovie(query: string):Observable<MoviesSearchResults[]> {

    const params = {...this.params, query: query }

    return this.http.get<SearchMovie>(`${this.baseUrl}/search/movie`, {
        params: params
      }).pipe(
        map( res => res.results)
        )

  }

  getMovie(idMovie: number) {

    return this.http.get<MovieSelected>(`${ this.baseUrl }/movie/${ idMovie }`,
              {
                params: this.params
              });
  }

  getMovieCast(idMovie: number): Observable<Cast[]> {
    return this.http.get<MovieCredits>(`${ this.baseUrl }/movie/${ idMovie }/credits`,
      {
        params: this.params
      }).pipe(
        map( res => res.cast)
      )
  }

}
