import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiceAPIService } from './service-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'WeatherApp';
  lat:any;
  long:any;

  city: any;
  citySlice: any;
  temp1: string = '';
  constructor(private service:ServiceAPIService, private http:HttpClient){}

  ngOnInit(){
    if(!navigator.geolocation){
      console.log('Location Not Supported')
    }
    navigator.geolocation.getCurrentPosition((position)=>{
      console.log(
        `lat: ${position.coords.latitude}, lon: ${position.coords.longitude}`
      );
      this.lat = position.coords.latitude;
      this.long = position.coords.longitude;

      this.service.MapBox(this.lat,this.long).subscribe((result)=>{
        this.city = result;
        console.log(result);
        this.city = this.city.features;
        this.temp1 = this.city[0].context[2].text;
      })
      // this.city = this.city.features;
      // this.temp1 = this.city[0].context[2].text;
      // this.service.Weather(this.temp1).subscribe((res)=>{
      //   console.log(res);
      // })

    });
  }
}
