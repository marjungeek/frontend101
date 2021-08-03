import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  @Input() lon:any;
  @Input() lat:any;
  xxx!: any

  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    this.apiService.getWeatherAll(this.lat, this.lon).subscribe(res=>{
      this.xxx =res ;
    })
  }

}
