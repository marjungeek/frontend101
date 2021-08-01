import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, switchMap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ApiweatherService {

  constructor(private http: HttpClient) { }

  // getLocationService(): Promise<any>{
  //   return new Promise((resolve, reject)=>{
  //     navigator.geolocation.getCurrentPosition(resp=>{
  //       resolve({lng: resp.coords.longitude, lat: resp.coords.latitude})
  //     })
  //   })
  // }

  getLocationService(){
    return new Observable((observer) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          observer.next(position);
        },
        (error) => {
          observer.next(error);
        });
      }).pipe(
        map((value: any) => {
          return new HttpParams()
          .set('lat', value.coords.latitude)
          .set('lon', value.coords.longitude)
          .set('units', 'metric')
          .set('exclude', 'minutely,hourly,alerts')
          .set('appid', 'c8107e47ab85025cce28da270aca9b9e');
        }),
        switchMap((value) => {
            return this.http.get('https://api.openweathermap.org/data/2.5/onecall',
            {
              params: value
            }
          );
        })
      );
    }// end of observable
  }// end of function
