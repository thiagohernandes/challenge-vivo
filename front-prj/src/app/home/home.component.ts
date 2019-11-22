import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { Response, Item } from './response';
import { UtilApp } from '../shared/util';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itens: Response[] = [];
  private util = new UtilApp();
  public errorReport: any = null;
  public search: string;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
  }

  searchMovieSerie(search: string): void {
      this.itens = [];
      this.homeService.searchMovieSerie(this.util.mountSearch(search)).subscribe((data: any) => {
        this.search = search;
        this.errorReport = null;
        if (data.Error) {
          return;
        }
        if (!data.Search) {
          this.itens.push(data);
        } else {
          this.itens = data.Search;
        }
      }, err => {
          this.errorReport = err;
      });
  }

  handlerImage(item: Item) {
    return item.Poster === 'N/A' ? 'assets\\img\\not-found-poster.png' : item.Poster;
  }

}
