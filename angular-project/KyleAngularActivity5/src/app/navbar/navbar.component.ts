import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  addlikeCount:number = 0;
  constructor(private ServiceService: ServiceService) { }

  ngOnInit(): void {
    this.ServiceService.finalnumber.subscribe(res =>{
      this.addlikeCount = res;

    })

  }



}
