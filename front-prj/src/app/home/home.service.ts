import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response, Item } from './response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const API = environment.apiDev;

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  public lastItensSearched: Response[] = [];
  public searchedItem: string;

  constructor(private http: HttpClient) { }

  searchMovieSerie(search: string): Observable<Response[]> {
    const URL = `${API}&s=${search}`;
    return this.http.get<Response[]>(URL);
  }

  searchMovieSerieDetail(imdb: string): Observable<Item> {
    const URL = `${API}&i=${imdb}`;
    return this.http.get<Item>(URL);
  }
}
