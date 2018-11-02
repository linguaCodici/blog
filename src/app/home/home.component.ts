import { Component, OnInit } from '@angular/core';
// import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images: string[] = [];
  imagePath: string;
  imageLabel: string[] = [];

  constructor() { }

  ngOnInit() {
    this.imagePath = 'assets/';
    this.images.push('bay-beach-beautiful-208340');
    this.images.push('beach-clouds-country-458846');
    this.images.push('beach-exotic-holiday-248797');
    this.images.push('daylight-environment-forest-459225');
    this.imageLabel.push('About');
    this.imageLabel.push('Blogs');
    this.imageLabel.push('Quiz');
    this.imageLabel.push('Contact');
  }

}
