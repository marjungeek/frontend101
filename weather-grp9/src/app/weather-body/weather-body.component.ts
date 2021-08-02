import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
@Component({
  selector: 'app-weather-body',
  templateUrl: './weather-body.component.html',
  styleUrls: ['./weather-body.component.css']
})
export class WeatherBodyComponent implements OnInit {
result : any;
  constructor(private ApiServiceService : ApiServiceService ) { }

  ngOnInit(): void {
    this.ApiServiceService.getWeatherForecast().subscribe(req=>{
      this.result = req;
      console.log(this.result);
  })

}
}
