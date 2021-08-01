import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  geoLink = 'https://api.mapbox.com/geocoding/v5/mapbox.places/[location-to-search|long,lat].json?access_token=(mapbox-api-key)&limit=1';
  weatherLink = 'https://api.openweathermap.org/data/2.5/onecall?lat=(latitude)&lon=(longitude)&exclude=minutely,hourly&appid=(openweathermap-api-key)';

  constructor(private http: HttpClient) { }
  }
