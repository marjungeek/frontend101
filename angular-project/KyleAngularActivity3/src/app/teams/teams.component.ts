import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
@Input() team:any;
@Input() id:any;



  constructor() { }

  ngOnInit(): void {
  }

}
