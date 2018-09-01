import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  continents: string[] = [
    "Asia",
    "Africa",
    "Europe",
    "Americas",
    "Oceania"
  ];

  constructor(private router: Router,
              private location: Location) { }

  ngOnInit() {
  }

  selectRegion(region) {
    this.router.navigate(['/countries', 'region', region])
    console.log(region);
  }

  goBack() {
    this.location.back();  
  }

}
