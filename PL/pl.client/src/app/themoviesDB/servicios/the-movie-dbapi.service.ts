import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable , map} from 'rxjs';
import {Result, Movie, MovieMap} from '../Modelos/movieDB';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDBApiService {

  constructor(private http: HttpClient) { }

  


  // Medoto automatico, si hay match se guardan los valores en mi interfaz. 
  getPopularMovies(): Observable<Result> {

    const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzM3YjY0MGM5YjZkNDcyNTljMTczNmIzYjFmNjlhYiIsIm5iZiI6MTc1MDQ0MTUzNi4xMTIsInN1YiI6IjY4NTU5ZTQwZDdiNTVmMGZlZDI5MDY0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eLNLWvOpZ_kEBWa49wLK7uDGHwxBEqpZHZkeUk4BlnQ');
    const url = 'https://api.themoviedb.org/3/movie/popular';

    return this.http.get<Result>(url, { headers })

  }

  // Metodo con Map, la respuesta se ajusta a mi interfaz modificada. (No hay match en propiedades)
  getPeliculas(): Observable<MovieMap[]> {

    const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzM3YjY0MGM5YjZkNDcyNTljMTczNmIzYjFmNjlhYiIsIm5iZiI6MTc1MDQ0MTUzNi4xMTIsInN1YiI6IjY4NTU5ZTQwZDdiNTVmMGZlZDI5MDY0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eLNLWvOpZ_kEBWa49wLK7uDGHwxBEqpZHZkeUk4BlnQ');
    const url = 'https://api.themoviedb.org/3/movie/popular';

    return this.http.get<any>(url, {headers}).pipe(
      // El map transforma lo que viene de la API de page, results.. a respuesta => results.map()
      map(respuesta => 
        //Este map toma cada objeto(Movie) y crea un nuevo objeto ,lo adapta a mi interface MovieMap la cual tiene sus propiedades en español
        respuesta.results.map((movie: any) => ({
          Id: movie.id,
          Titulo: movie.title,
          FechaLanzamiento: movie.release_date,
          Resumen: movie.overview,
          PosterPath: `https://image.tmdb.org/t/p/w500${movie.poster_path}`
        }))
      )
    );
  }
  

  }


