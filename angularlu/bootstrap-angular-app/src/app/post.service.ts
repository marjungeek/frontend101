import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import { postInterface } from './postInterface';
import {map, switchMap} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class PostService {
  url: string = 'https://api.openweathermap.org/data/2.5/weather?q=Marikina&appid=6924b39add79a866cc85452f1c7fdafb';
  geoUrl:string ='api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=6924b39add79a866cc85452f1c7fdafb'
  lat:any
  lng:any
  constructor(private http: HttpClient) { }

  getList(): Observable<any>{
    return this.http.get<any>(this.url);

  }
  getPost(id: any): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }

//   getLocation() {
//     return new Observable((observer) => {
//   navigator.geolocation.getCurrentPosition(position =>{
//   observer.next(position);
//   },(error)=>{
//     observer.next(error);
//   });
//  }).pipe(
//    map((value:any) =>{
//      return new HttpParams()
//      .set('lon', value.coords.longitude)
//      .set('lat', value.coords.latitude)
//      .set('units', 'metric')
//      .set('exclude', 'minutely, hourly, alerts')
//      .set('appid', '6924b39add79a866cc85452f1c7fdafb')
//    }),
//    switchMap((value)=>{
//      return this.http.get(`https://api.openweathermap.org/data/2.5/onecall`)
//     {
//       params:value
//     });
//   })
  
//   );
//   }
}
