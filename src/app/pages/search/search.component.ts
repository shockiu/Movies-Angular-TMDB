import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { MoviesSearchResults } from '../../interfaces/search.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public movies: MoviesSearchResults[] = [];
  public title: string = '';
  constructor(  private activatedRoute: ActivatedRoute,
                private moviesServices: MoviesService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( res =>{
      this.title = res.text;
      this.moviesServices.searchMovie(res.text)
                  .subscribe(movies => {
                    this.movies = movies
                  });
    })

  }

}
