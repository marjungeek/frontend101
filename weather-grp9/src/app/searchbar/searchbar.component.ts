import { HttpParams } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  lat!:number;
  lon!:number;
  loc!:number;
  mapBox:any;
  result:any
weatherMap!:any
  searchLoc:any
  http: any;
  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
    this.getWeatherForecast().subscribe(res=>{
      this.mapBox = res;
      console.log(this.mapBox)
    })

  }

  onClick(search:any){

   if(search==''){
    this.apiService.cityChild(this.lat,this.lon).subscribe(result=>{
       this.weatherMap =result;
       this.lat = this.mapBox.features[0].center[1]
       this.lon = this.mapBox.features[0].center[0]
        console.log(search)
       })
       }else{
       this.apiService.getLoc(search).subscribe(res=>{
          this.mapBox = res
          console.log(res)
        this.lat = this.mapBox.features[0].center[1]
        this.lon = this.mapBox.features[0].center[0]
        })
     }
    
     }

    
    
    getWeatherForecast(){
        return new Observable((observer) => {
          navigator.geolocation.getCurrentPosition(
            (position)=> {
              this.lat = position.coords.latitude;
              this.lon = position.coords.longitude;
              console.log(this.lat)
              console.log(this.lon)
              observer.next(position);
              this.apiService.cityChild(this.lat, this.lon).subscribe(res=>{
                this.mapBox = res;
                console.log(this.mapBox)
              });
            }
          )
        // }).pipe(
        //   map((value:any)=>{
        //     return new HttpParams()
        //     .set('lon', value.coords.longitude)
        //     .set('lat', value.coords.latitude)
        //     .set('units', 'metric')
        //     .set('exclude', 'minutely,hourly,alerts')
        //     .set('appid', '0c0c304c030475f112564974e0ad4895');
        //   }),
        //   switchMap((values)=>{
        //     return this.http.get('https://api.openweathermap.org/data/2.5/onecall', { params: values})
        //   })
        // )
        // }
  })
}
}


 

