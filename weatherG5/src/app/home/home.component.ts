import { Component, OnInit } from '@angular/core';
import { ApiweatherService, } from '../apiweather.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  result!: any;

  constructor( private apiService: ApiweatherService) { }


  ngOnInit(): void {
    const weatherApi = this.apiService.getLocationService();
    weatherApi.subscribe(weatherApi => {
      this.result = weatherApi;
      console.log(this.result);
    });
  }




}
