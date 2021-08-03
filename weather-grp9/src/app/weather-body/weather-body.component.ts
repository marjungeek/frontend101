import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-weather-body',
  templateUrl: './weather-body.component.html',
  styleUrls: ['./weather-body.component.css']
})
export class WeatherBodyComponent implements OnInit {

  @Input() lon:any;
  @Input() lat:any;
  xxx!:any;
  search!:any;
result : any;
urlMapbox = 'https://api.mapbox.com/geocoding/v5/mapbox.places'
location = "";
key = 'pk.eyJ1IjoibGFuenV5MDYiLCJhIjoiY2tyc3lpZ3h2MG9oMTJucGZ3eXRwZWtrcSJ9.Yv-F98s_odqqHASs03YT6g'
  
  constructor(private apiService : ApiServiceService, private http:HttpClient ) { }


  
  ngOnInit(): void {

    // this.apiService.getWeatherForecast().subscribe(res=>{
    //   console.log(res)
    
    // this.apiService.cityChild("").subscribe(res=>{
    //   this.result = res;
    //   console.log(res)
  

  
  //   })
   
  // })
  }
  ngOnChanges():void{
    this.apiService.getWeatherAll(this.lat, this.lon).subscribe(res=>{
      this.result =res ;
      console.log(res)
    })
  }

    
}
