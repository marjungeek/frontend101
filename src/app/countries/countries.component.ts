import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { GlobalDataSumarry } from '../modals/global-data';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {

  data : GlobalDataSumarry[] | undefined;
  countries : string[] = [];
  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;

  constructor( private covidService : CovidService ) { }

  ngOnInit(): void {

    this.covidService.getGlobalData().subscribe(result => {
      this.data = result;
      this.data.forEach(cs => {
        this.countries.push(cs.country)
      })
    })
  }

  updateValues( country : string ){
    console.log(country)
    this.data?.forEach(cs => {
      if(cs.country == country){
        this.totalActive = cs.active
        this.totalConfirmed = cs.confirmed
        this.totalDeaths = cs.deaths
        this.totalRecovered = cs.recovered
      }
    })
  }

}
