import { Component, OnInit } from '@angular/core';
import { TryAPIService } from 'src/app/services/try-api.service';
import { Data } from 'src/app/DataInterface';
@Component({
  selector: 'app-using-inject',
  templateUrl: './using-inject.component.html',
  styleUrls: ['./using-inject.component.css']
})
export class UsingInjectComponent implements OnInit {
  listOfTeam: any;
  team:string = '';
  id:string = '';
  constructor(private APISERVICE: TryAPIService) { }

  ngOnInit(): void {
    this.APISERVICE.getData().subscribe((bobo)=>(this.listOfTeam=bobo));
  }
  // getAPII(){
  //   //this.APISERVICE.getData().subscribe((bobo) => console.log(bobo));
  //   this.APISERVICE.getData().subscribe((bobo)=>(this.listOfTeam=bobo));
  // }
  Populate(){
    // const template = document.createElement('hutext');
    // document.getElementsByTagName('body')[0].appendChild(template);
    for(let pop of this.listOfTeam.data){
       console.log(pop.team);
    }
  }

}
