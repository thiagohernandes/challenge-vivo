import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../home/response';
import { HelperService } from '../shared/helper.service';

@Component({
  selector: 'app-item-search',
  templateUrl: './item-search.component.html',
  styleUrls: ['./item-search.component.css']
})
export class ItemSearchComponent implements OnInit {

  @Input()
  itemSearched: Item;

constructor(public helper: HelperService) { }

  ngOnInit() {
  }

}
