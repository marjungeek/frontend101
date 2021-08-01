import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  geoLink = 'https://api.mapbox.com/geocoding/v5/mapbox.places/[mandaluyong|14.5914343,121.0255888].json?access_token=pk.eyJ1Ijoia2VubmV0aDY4IiwiYSI6ImNrcnE0aGttNjBwd28yb28xYXdqcnRsaDMifQ.Fyl8DEuViliZ_00eGEk3Kw&limit=1';
  weatherLink = 'https://api.openweathermap.org/data/2.5/onecall?lat=14.5914343&lon=121.0255888&exclude=hourly,daily&appid=1488b092a0e9a7622832712c6224344d';

  constructor(private http: HttpClient) { }
  }
