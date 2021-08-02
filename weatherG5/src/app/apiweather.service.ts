import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiweatherService {
  lat!: number;
  lon!: number;
  mapbox: string = "pk.eyJ1IjoiYmFkbHVja2RyIiwiYSI6ImNrcnVxMDIxajN0YnUycWtkNzlzc2M1c2EifQ.LHxoIYiolSdWRPkh9P_RWw";
  location: string = "Manila";

  constructor(private http: HttpClient) { }

  getLocationService(){
    return new Observable((observer) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.lat=position.coords.latitude;
          this.lon=position.coords.longitude;
          observer.next(position);
        },
        (error) => {
          observer.next(error);
        });
      }).pipe(
        map((value: any) => {
          return new HttpParams()
          .set('lat', this.lat)
          .set('lon', this.lon)
          .set('units', 'metric')
          .set('exclude', 'minutely,hourly,alerts')
          .set('appid', 'c8107e47ab85025cce28da270aca9b9e');
        }),
        switchMap((value) => {
            return this.http.get('https://api.openweathermap.org/data/2.5/onecall', { params: value });
        })
      );
    }// end of observable

    getSearchLocation(place : any): Observable <any> {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/";
    return this.http.get(url + this.location +".json?access_token=" + this.mapbox );
    }


  }// end of function
