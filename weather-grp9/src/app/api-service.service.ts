import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  myMethods!: Observable<any>;
  location = "Manila"
weather:any;
lat:any;
lon:any;
city:any;
array:any = []
arrayMapBox!:any [];
url ='https://api.openweathermap.org/data/2.5/onecall?'
urlMapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places'
//location: string = "Manila.json?"
key = 'pk.eyJ1IjoibGFuenV5MDYiLCJhIjoiY2tyc3lpZ3h2MG9oMTJucGZ3eXRwZWtrcSJ9.Yv-F98s_odqqHASs03YT6g'
openkey='0c0c304c030475f112564974e0ad4895'
  constructor(private http: HttpClient) {
   

  }

  cityChild(lon:number, lat:number):Observable<any>{
    let params = new HttpParams()
     .set("access_token", this.key)
   
   return this.http.get(`${this.urlMapbox}/${lat},${lon}.json?=access_token` ,{params});
  }
  getLoc(data:string){
    let params = new HttpParams()
    .set("access_token", this.key)
   return this.http.get(`${this.urlMapbox}/${data}.json?=access_token` ,{params})
  }
  
  getWeatherAll(lat:number, lon:number){


    return this.http.get(`${this.url}lat=${lat}&lon=${lon}&appid=${this.openkey}`);
  //return this.http.get(${this.apiUrl}lat=${lat}&lon=${lon}&exlude=hourly&units=metric&appid=${this.apiKey});
  }

  
  
  
  // getCurrentLocation(place:any): Observable <any>{
 
  //   return this.http.get(this.urlMapbox +"/"+this.location+".json?"+"access_token=" + this.key);
  // //return this.http.get(${this.mapBoxAPI}/${place}.json?, {params});
  // }

  // getWeatherForecast(){
  //   return new Observable((observer) => {
  //     navigator.geolocation.getCurrentPosition(
  //       (position)=> {
  //         this.cityChild("").subscribe(data=>{
  //           this.city = data;
  //         this.lat = data.features[0].center[0]
  //         this.lon = data.features[0].center[1]
  //         console.log(this.lat)
  //         })
      
  //         observer.next(position)
  //        // console.log(this.array);
          
  //       },
  //       (error)=>{
  //         observer.next(error)
  //       }
  //     )
  //   }).pipe(
  //     map((value:any)=>{
  //       return new HttpParams()
  //       .set('lon', this.array[1])
  //       .set('lat', this.array[0])
  //       .set('units', 'metric')
  //       .set('exclude', 'minutely,hourly,alerts')
  //       .set('appid', '0c0c304c030475f112564974e0ad4895');
  //     }),
  //     switchMap((values)=>{
  //       return this.http.get('https://api.openweathermap.org/data/2.5/onecall', { params: values})
  //     })
  //   )
  //   }
}

