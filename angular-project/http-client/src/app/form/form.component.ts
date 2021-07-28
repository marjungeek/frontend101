import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contentMessage:string = "";

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }
  updateMessage(message: HTMLTextAreaElement){
    this.apiService.updateMessage(message.value);
    // this.contentMessage="hello";
  }

  // or updateMessage(message: string){
  //   this.apiService.updateMessage(message);
  // }
}
