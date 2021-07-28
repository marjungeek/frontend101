import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  contentMessage : string = "";
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.messageData.subscribe(data => {
      this.contentMessage = data;
    })
  }
}
