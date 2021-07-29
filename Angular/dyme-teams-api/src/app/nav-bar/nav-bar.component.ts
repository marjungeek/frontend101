import { Component, Input, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  //@Input() Like:number=0;
  Like:number=0;

  constructor(private APIService: APIService) { }

  ngOnInit(): void {
    this.APIService.count.subscribe(data =>{
      //console.log('total like: ',data);
      this.Like=data;
    });
  }
  // plusMe(event:any){
  //   console.log('NavBar:',event);
  // }

}
