import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() teamL:any=[];
  @Input() hideTable!:boolean;

  columnsToDisplay = ['Team ID','Team List', 'Country', 'Time Zone'];



  constructor() { }

  ngOnInit(): void {
  }

}
