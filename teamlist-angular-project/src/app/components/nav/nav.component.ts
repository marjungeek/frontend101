import { Component, OnInit } from '@angular/core';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  like: number=0;
  sfasfsa: number=0;
  constructor(private service:AppServiceService) { }

  ngOnInit(): void {
    this.service.hulike.subscribe(res =>{
      console.log(res);
       this.sfasfsa = res;
     })
  }

}
