import { Component, Input, OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-fore-cast',
  templateUrl: './fore-cast.component.html',
  styleUrls: ['./fore-cast.component.css']
})
export class ForeCastComponent implements OnInit {
  @Input() lon:any;
  @Input() lat:any;
  result!: any
  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
  }
  ngOnChanges():void{
    this.apiService.getWeatherAll(this.lat, this.lon).subscribe(res=>{
      this.result =res ;
    })
  }
}
