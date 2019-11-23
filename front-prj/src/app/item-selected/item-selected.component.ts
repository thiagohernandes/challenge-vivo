import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../home/response';
import { HomeService } from '../home/home.service';
import { HelperService } from '../shared/helper.service';

@Component({
  selector: 'app-item-selected',
  templateUrl: './item-selected.component.html',
  styleUrls: ['./item-selected.component.css']
})
export class ItemSelectedComponent implements OnInit {

  public itemSelected: Item = {
      Title: '',
      Poster: '',
      Year: '',
      Runtime: '',
      Genre: '',
      Director: '',
      Actors: '',
      Plot: '',
      Language: '',
      Metascore: '',
      imdbRating: '',
      imdbVotes: '',
      imdbID: '',
  };

  public errorRequest: any;

  constructor(private router: Router, private activateRoute: ActivatedRoute, private homeService: HomeService,
              public helper: HelperService) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      if (!params.get('imdb')) {
        return;
      }
      this.homeService.searchMovieSerieDetail(params.get('imdb')).subscribe((data: Item) => {
        this.itemSelected = data;
      }, err => {
        this.errorRequest = err;
      });
    });
  }

  newSearch(): void {
    this.homeService.searchedItem = null;
    this.router.navigate(['/home']);
  }

  comeBackHome(): void {
    this.router.navigate(['/home', this.homeService.searchedItem]);
  }

}
