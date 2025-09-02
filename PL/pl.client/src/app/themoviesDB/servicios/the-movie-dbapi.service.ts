import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable , map} from 'rxjs';
import {Result, Movie, MovieMap} from '../Modelos/movieDB';

@Injectable({
  providedIn: 'root'
})
export class TheMovieDBApiService {

  constructor(private http: HttpClient) { }

  


  getPopularMovies(): Observable<Result> {

    const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzM3YjY0MGM5YjZkNDcyNTljMTczNmIzYjFmNjlhYiIsIm5iZiI6MTc1MDQ0MTUzNi4xMTIsInN1YiI6IjY4NTU5ZTQwZDdiNTVmMGZlZDI5MDY0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eLNLWvOpZ_kEBWa49wLK7uDGHwxBEqpZHZkeUk4BlnQ');
    const url = 'https://api.themoviedb.org/3/movie/popular';

    return this.http.get<Result>(url, { headers })

  }

  getPeliculas(): Observable<MovieMap[]> {

    const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzM3YjY0MGM5YjZkNDcyNTljMTczNmIzYjFmNjlhYiIsIm5iZiI6MTc1MDQ0MTUzNi4xMTIsInN1YiI6IjY4NTU5ZTQwZDdiNTVmMGZlZDI5MDY0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eLNLWvOpZ_kEBWa49wLK7uDGHwxBEqpZHZkeUk4BlnQ');
    const url = 'https://api.themoviedb.org/3/movie/popular';

    return this.http.get<any>(url, {headers}).pipe(
      map(respuesta => 
        respuesta.results.map((p: any) => ({
          Id: p.id,
          Titulo: p.title,
          FechaLanzamiento: p.release_date,
          Resumen: p.overview,
          PosterPath: `https://image.tmdb.org/t/p/w500${p.poster_path}`
        }))
      )
    );
  }
  

    // getPopularMoviesMap(): Observable<Result> {

    // const headers = new HttpHeaders().set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YzM3YjY0MGM5YjZkNDcyNTljMTczNmIzYjFmNjlhYiIsIm5iZiI6MTc1MDQ0MTUzNi4xMTIsInN1YiI6IjY4NTU5ZTQwZDdiNTVmMGZlZDI5MDY0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eLNLWvOpZ_kEBWa49wLK7uDGHwxBEqpZHZkeUk4BlnQ');
    // const url = 'https://api.themoviedb.org/3/movie/popular';

    
    // return this.http.get<any>(url, { headers }).pipe(map(
    //   res => ({
    //     results: res.results.pipe(map())
    //   })
    // ));



  }


