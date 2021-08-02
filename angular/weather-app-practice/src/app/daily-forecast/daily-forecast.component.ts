import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-daily-forecast',
  templateUrl: './daily-forecast.component.html',
  // styleUrls: ['./daily-forecast.component.css']
  styleUrls: ['../app.component.css']
})
export class DailyForecastComponent implements OnInit {

  constructor() { }

  @Input() apiWeatherData: any;

  ngOnInit(): void {
  }

  getIcon(icon: string, image: HTMLImageElement) {
    image.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  }

}
