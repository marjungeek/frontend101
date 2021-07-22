import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {
  loadState = "Loading..."
  constructor() { }

  ngOnInit(): void {
  }
  onClick(){
    this.loadState = "Finished!";
  }
}
