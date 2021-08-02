import { Component, EventEmitter, OnInit, Output, } from '@angular/core';
import { ApiweatherService } from '../apiweather.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  result!: string;
  @Output() toSearchLocation: any = new EventEmitter<string>();

  constructor(private apiService: ApiweatherService) { }


  ngOnInit(): void {
  const test = this.apiService.getSearchLocation("").subscribe((res)=>{
    console.log(res);
    this.result = res;
    });

  }

  onClick(data:any){
    this.toSearchLocation = data.value;
    console.log('getSearch: ', this.toSearchLocation);
  }


}
