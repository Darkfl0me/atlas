import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { ApiService } from '../api.service';

import { Country } from '../country'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnInit {

  countryInfo: Observable<Country[]>;

  constructor(private route: ActivatedRoute,
            private apiClient: ApiService) { }

  ngOnInit() {
    let country = this.route.snapshot.paramMap.get('name');
    this.countryInfo = this.apiClient.getCountryByName(country)
  }

}
