import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  @Input('countryList') countries: any;
  @Output() pickCountry = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  showDetails(countryName: string) {
    this.pickCountry.emit(countryName);
  }

}
