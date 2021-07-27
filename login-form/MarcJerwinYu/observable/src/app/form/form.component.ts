import { Component, OnInit } from '@angular/core';
import { serviceAPI } from '../service.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  contentMessage! : string;

  constructor(private serviceAPI : serviceAPI) { }

  ngOnInit() {
  }

  updateMessage(message : string) {
    this.serviceAPI.updateMessage(message);
  }

}
