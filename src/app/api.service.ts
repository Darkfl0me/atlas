import { Injectable, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, NEVER } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ToasterService } from 'angular2-toaster'

import { Countries } from './countries';
import { Country } from './country'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  private base_url = "https://restcountries.eu/rest/v2"

  constructor(private http: HttpClient,
              private toasterService: ToasterService) { }

  getCountryByName(country): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.base_url}/name/${country}?fullText=true`)
            .pipe(catchError(err => {
              this.toasterService.popAsync('error', 'Error', err.statusText);
              return NEVER;
            }));
  }

  getCountries(field :string, value :string) : Observable<Countries[]> {
    return this.http.get<Countries[]>(`${this.base_url}/${field}/${value}/?fields=name;capital;currencies;languages;flag`)
            .pipe(catchError((err) => {
              this.toasterService.pop('error', 'Error', err.statusText);
              return NEVER;   
            }));
  }

}
