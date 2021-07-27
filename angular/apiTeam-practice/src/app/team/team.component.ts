import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  @Input() teamListen: any;//Is used when Parent gives data to Child??

  constructor() { }

  ngOnInit(): void {
  }

}
