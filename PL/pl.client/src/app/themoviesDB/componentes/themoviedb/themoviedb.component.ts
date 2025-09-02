import { Component , OnInit} from '@angular/core';
import { TheMovieDBApiService} from '../../servicios/the-movie-dbapi.service';
import {Result, Movie, MovieMap} from '../../Modelos/movieDB';

@Component({
  selector: 'app-themoviedb',
  standalone: false,
  templateUrl: './themoviedb.component.html',
  styleUrl: './themoviedb.component.css'
})
export class ThemoviedbComponent implements OnInit {


  movies? : Movie[];
  peliculas?: MovieMap[];

  constructor(private api:TheMovieDBApiService){}

  ngOnInit(): void {
    
    
    this.getPopularMovies();
    // this.getPopularMoviesMap();
    this.getPeliculasMap();

  }

  getPopularMovies(){

    this.api.getPopularMovies().subscribe((data: Result) => {

      this.movies = data.results;
      console.log(this.movies);
      

    })

  }

  // getPopularMoviesMap(){

  //     this.api.getPopularMoviesMap().subscribe(responseMovie => this.movieMap = responseMovie)
  //     console.log(this.movieMap)
  // }

  getPeliculasMap(){

    this.api.getPeliculas().subscribe(peliculas => {
  console.log(peliculas);
  this.peliculas = peliculas;
  console.log(this.peliculas);

  // [
  //   { id: 755898, titulo: "War of the Worlds", fechaEstreno: "2025-07-29", ... },
  //   { id: 911430, titulo: "F1", fechaEstreno: "2025-06-25", ... }
  // ]
});


  }

}
