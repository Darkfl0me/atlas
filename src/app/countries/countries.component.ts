import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router'
import { Observable } from 'rxjs';
import { distinctUntilChanged, switchMap } from 'rxjs/operators'

import { ApiService } from '../api.service';
import { PanelComponent } from '../panel/panel.component';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  countries: Observable<any>

  constructor(private apiClient: ApiService,
            private route: ActivatedRoute,
            private router: Router) { }

  ngOnInit() {
    this.countries = this.fetchResults()
  }

  fetchResults() {
    return this.route.params
              .pipe(
                distinctUntilChanged(),
                switchMap(params  => {
                  return this.apiClient.getCountries(params.field, params.value)
                })
              )
  }

  onSelected(name: string) {
    this.router.navigate(['/country', name]);
  }

}
