import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { }
  getWeatherForecast(){
    return new Observable((observer) => {
      navigator.geolocation.getCurrentPosition(
        (position)=> {
          observer.next(position)
        },
        (error)=>{
          observer.next(error)
        }
      )
    }).pipe(
      map((value:any)=>{
        return new HttpParams()
        .set('lon', value.coords.longitude)
        .set('lat', value.coords.latitude)
        .set('units', 'metric')
        .set('exclude', 'minutely,hourly,alerts')
        .set('appid', '0c0c304c030475f112564974e0ad4895');
      }),
      switchMap((values)=>{
        return this.http.get('https://api.openweathermap.org/data/2.5/onecall', { params: values})
      })
    )
      }
}
