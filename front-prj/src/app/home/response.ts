export interface Response {
    Response: string;
    Search: Item[];
    totalResults: string;
    Error: string;
}

export interface Item {
    Title: string;
    Poster: string;
}
