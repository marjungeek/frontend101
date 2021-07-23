import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  validFeed: boolean = true;
  Count: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

  ngFor(){

  }

  describe(description: string){
    this.validFeed = true;
  }


}
