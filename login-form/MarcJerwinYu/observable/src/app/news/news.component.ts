import { Component, OnInit } from '@angular/core';
import { serviceAPI } from '../service.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  contentMessage! :string;

  constructor(private serviceAPI : serviceAPI) { }

  ngOnInit(): void {
    this.serviceAPI.messageData.subscribe(data => {
      this.contentMessage = data;
    })
  }

}
