import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  contentMessage: string;

  constructor(private apiService: ApiService) { }

  ngOnInit() {

  }
  updateMessage(message: HTMLInputElement){
    this.apiService.updateMessage(message.value);
  }

}
