import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  headerIptSearchEmitter = new EventEmitter();
  submitted = false;
  formHeaderSearch: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formHeaderSearch = this.formBuilder.group({
      iptSearch: ['', Validators.required, Validators.minLength(5), Validators.maxLength(80) ]
   });
  }

  ngOnInit() {
  }

  updateHeaderSearch(event): void {
    this.submitted = true;

    if (this.formHeaderSearch.invalid) {
      return;
    }
    if (event.keyCode === 13) {
      this.headerIptSearchEmitter.emit('d');
      this.submitted = false;
    }
  }

}
