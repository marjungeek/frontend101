import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiWeatherService {

  constructor(private http: HttpClient) { }

  /*
  !!Re-study promises!!
  !!Re-study (bracket notation??)!!
  Reference for getWeatherOnLoad:
  https://stackoverflow.com/questions/51628568/
  get-coordinates-of-current-location-in-angular/51629232
   */
  getWeatherOnLoad(): Promise<any>{
    return new Promise((resolve, reject) => {

      navigator.geolocation.getCurrentPosition(resp => {
        /* Link Below is for search functionality
        https://api.mapbox.com/geocoding/v5/mapbox.places/[location-to-search|long,lat].json?access_token=pk.eyJ1IjoiZWRiZXJzd2lmdCIsImEiOiJja3JxMDltMTU2djc4MnBwZGdscTE4cGxxIn0.3XaeMFW3XzuuXU8_4qnMwA&limit=1
        */
          let urlPlace = this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${resp.coords.longitude},${resp.coords.latitude}.json?access_token=pk.eyJ1IjoiZWRiZXJzd2lmdCIsImEiOiJja3JxMDltMTU2djc4MnBwZGdscTE4cGxxIn0.3XaeMFW3XzuuXU8_4qnMwA&limit=1`);
          let url = this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${resp.coords.latitude}&lon=${resp.coords.longitude}&units=metric&exclude=minutely,hourly&appid=219f924f6a598ec23b51a0a0dd5e304d`);
          resolve({lng: resp.coords.longitude, lat: resp.coords.latitude, apiUrl: url, name: urlPlace});
        },
        err => {
          reject(err);
        });
    });
  }

  getWeatherOnSearch(userInput: string) {
    return this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${userInput}.json?access_token=pk.eyJ1IjoiZWRiZXJzd2lmdCIsImEiOiJja3JxMDltMTU2djc4MnBwZGdscTE4cGxxIn0.3XaeMFW3XzuuXU8_4qnMwA&limit=1`);
  }

  displayWeatherOnSearch(longitude: number, latitude: number) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&exclude=minutely,hourly&appid=219f924f6a598ec23b51a0a0dd5e304d`);
  }
}
