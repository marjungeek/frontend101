import { Component, OnInit } from '@angular/core';
import { ApiweatherService } from '../apiweather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})
export class CurrentWeatherComponent implements OnInit {

  constructor(private apiService: ApiweatherService) { }
  result!: any;

  ngOnInit(): void {
    const weatherApi = this.apiService.getLocationService();
    weatherApi.subscribe(weatherApi => {
      this.result = weatherApi;
      console.log("Parent: ",this.result);
    });
  }

}
