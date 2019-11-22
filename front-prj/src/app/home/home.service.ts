import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Response } from './response';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

const API = environment.apiDev;

@Injectable({
  providedIn: 'root'
})

export class HomeService {

  constructor(private http: HttpClient) { }

  searchMovieSerie(search: string): Observable<Response[]> {
    const URL = `${API}&s=${search}`;
    return this.http.get<Response[]>(URL);
}
}
