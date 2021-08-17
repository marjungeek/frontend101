import { Component, OnInit } from '@angular/core';
import { CovidService } from '../covid.service';
import { GlobalDataSumarry } from '../modals/global-data';
import {SuiCheckboxModule, SuiRatingModule} from 'ng2-semantic-ui';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  totalConfirmed = 0;
  totalActive = 0;
  totalDeaths = 0;
  totalRecovered = 0;
  globalData : GlobalDataSumarry[] | undefined;

  constructor( private covidService : CovidService ) { }

  ngOnInit(): void {

  this.covidService.getGlobalData().subscribe(data => {
    console.log(data)
    this.globalData = data;
    data.forEach(cs => {
      if(!Number.isNaN(cs.confirmed)){
      this.totalActive += cs.active
      this.totalConfirmed += cs.confirmed
      this.totalDeaths += cs.deaths
      this.totalRecovered += cs.recovered
      }

    })
  })
  }

}
