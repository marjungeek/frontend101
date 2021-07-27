import { Component, OnInit } from '@angular/core';
import { serviceAPI } from '../service.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  contentMessage! :string;

  constructor(private serviceAPI : serviceAPI) { }

  ngOnInit(): void {
    this.serviceAPI.messageData.subscribe(res =>{
      console.log(res);
      this.contentMessage = res;
    })
  }

}
