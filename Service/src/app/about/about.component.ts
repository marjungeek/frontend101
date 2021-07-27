import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  contentMessage!: string;
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.messageData.subscribe(data => {
      this.contentMessage = data;
    })
  }

}
