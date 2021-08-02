import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  // styleUrls: ['./weather-details.component.css']
  styleUrls: ['../app.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  constructor() { }

  @Input() apiWeatherData: any;

  ngOnInit(): void {
  }

  convertSeconds(start: number, end: number) {
    let hours = Math.floor((start-end)/3600);
    let minutes = (Math.floor((start-end)/60)) % 60;
    return `${hours}:${minutes}`;
  }

}
