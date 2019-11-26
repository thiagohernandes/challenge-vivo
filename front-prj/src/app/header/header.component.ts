import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  searchHome: string;

  @Output()
  headerIptSearchEmitter = new EventEmitter();
  submitted = false;
  formHeaderSearch: FormGroup;

  constructor(private formBuilder: FormBuilder, private homeService: HomeService) {
    this.formHeaderSearch = this.formBuilder.group({
      iptSearch: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(50)] ]
   });
  }

  ngOnInit() {
    if (this.homeService.lastItensSearched) {
      this.formHeaderSearch.get('iptSearch').setValue(this.homeService.searchedItem);
    } else {
      this.formHeaderSearch.get('iptSearch').setValue('');
    }
  }

  updateHeaderSearch(event): void {
    this.submitted = true;
    if (this.formHeaderSearch.invalid) {
      return;
    }
    if (event.keyCode === 13) {
      this.headerIptSearchEmitter.emit(this.formHeaderSearch.get('iptSearch').value);
      this.submitted = false;
    }
  }

}
