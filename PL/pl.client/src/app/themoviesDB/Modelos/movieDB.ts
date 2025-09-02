
// Interface que hace match con result de API.
export interface Movie
{
    id: number;
    title: string;
    realese_date: string;
    overview: string;
    poster_path: string;
    

}

// Interface modificada. 
export interface MovieMap
{

    Titulo: string;
    FechaLanzamiento: string;
    Resumen: string;
    PosterPath: string;
    

}


export interface Result{

    page: number;
    total_results: number;
    total_pages: number;
    results: Movie[];
    resultsMap: MovieMap[];



}