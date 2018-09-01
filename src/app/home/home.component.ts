import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  continents: Array<string> = [
    "asia",
    "africa",
    "europe",
    "americas",
    "oceania"
  ]

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectRegion(region) {
    this.router.navigate(['/countries', 'region', region])
    console.log(region);
  }

}
