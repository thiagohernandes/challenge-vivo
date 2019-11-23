import { Injectable } from '@angular/core';
import { Item } from '../home/response';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor() { }

  public handlerImage(item: Item): string {
    return item.Poster === 'N/A' ? 'assets\\img\\not-found-poster.png' : item.Poster;
}
}
