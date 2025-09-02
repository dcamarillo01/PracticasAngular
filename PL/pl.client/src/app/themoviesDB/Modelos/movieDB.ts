
export interface Movie
{

    title: string;
    realese_date: string;
    overview: string;
    poster_path: string;
    

}

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