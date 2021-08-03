import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  lat!:number;
  lon!:number;
  loc!:number

  searchLoc:any
  constructor(private apiService:ApiServiceService) { }

  ngOnInit(): void {
  }
  onClick(search:any){

    this.apiService.cityChild(search).subscribe(res=>{
      this.searchLoc = res;
      console.log(this.searchLoc)
    })
    
    
    }

   
  }
    

  
 

