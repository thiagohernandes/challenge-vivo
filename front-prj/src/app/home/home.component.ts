import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HomeService } from './home.service';
import { Response } from './response';
import { UtilApp } from '../shared/util';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itens: Response[] = [];
  public util = new UtilApp();
  public errorReport: any = null;
  public search: string;
  public loading = false;

  @Output()
  searchEmitter = new EventEmitter();

  constructor(private activateRoute: ActivatedRoute, private homeService: HomeService) { }

  ngOnInit() {
    this.errorReport = null;
    this.activateRoute.paramMap.subscribe(params => {
      if (!params.get('newsearch')) {
        this.homeService.lastItensSearched = null;
        this.search = '';
        return;
      }
      this.itens = [];
      this.itens = this.homeService.lastItensSearched;
      this.search = params.get('newsearch');
    });
  }

  searchMovieSerie(search: string): void {
      this.itens = [];
      this.loading = true;
      this.homeService.searchMovieSerie(this.util.mountSearch(search)).subscribe((data: any) => {
        this.search = search;
        this.errorReport = null;
        if (data.Error) {
          this.loading = false;
          this.homeService.lastItensSearched = [];
          this.homeService.searchedItem = '';
          return;
        }
        if (!data.Search) {
          this.itens.push(data);
        } else {
          this.itens = data.Search;
        }
        this.homeService.lastItensSearched = [];
        this.homeService.lastItensSearched = this.itens;
        this.homeService.searchedItem = search;
        this.loading = false;
      }, err => {
          this.errorReport = err;
      });
  }
}
