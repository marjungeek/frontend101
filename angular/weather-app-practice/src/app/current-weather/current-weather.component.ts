import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['../app.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  @Input() apiWeatherData: any;

  constructor() { }

  ngOnInit(): void {
  }

  getIcon(icon: string, image: HTMLImageElement) {
    image.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
  }

}
