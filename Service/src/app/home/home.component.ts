import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  contentMessage!: string;
   constructor(private apiService: ApiService) { }

  ngOnInit() {
    //this.message.updateMessage('This is new message');\
    this.apiService.messageData.subscribe(res => {
      console.log(res);
      this.contentMessage = res;
    })
  }

}
