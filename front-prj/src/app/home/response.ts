export interface Response {
    Response: string;
    Search: Item[];
    totalResults: string;
    Error: string;
}

export interface Item {
    Title: string;
    Poster: string;
    Year: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Actors: string;
    Plot: string;
    Language: string;
    Metascore: string;
    imdbRating: string;
    imdbVotes: string;
    imdbID: string;
}
