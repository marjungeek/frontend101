import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {
  loading = 'loading';
  constructor() { }

  ngOnInit(): void {
  }
  clickFunction(){
    if(this.loading == 'loading'){
      this.loading = 'finished'
    }else{
        this.loading = 'loading';
    }
  }

}
