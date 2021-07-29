import { Component, OnInit } from '@angular/core';

// to inject, import the service first
import { ServiceService } from '../service.service';

//also import the interface
import { teamlistINT } from '../teamlistINT';

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  styleUrls: ['./teamlist.component.css']
})
export class TeamlistComponent implements OnInit {

  //for interface
  teamlistINT: teamlistINT[]=[];

//for non interface
teaml: any;

  //after importing, inject the service here
  constructor(private ServiceService: ServiceService) { }


  //inside this method----------------------
  ngOnInit(): void {
    const result = this.ServiceService.getList();
    result.subscribe(result => {
  this.teaml = result
})

  }

// display no interface---------------------------
//   ngOnInit(): void {
//     const result = this.ServiceService.getList();
// result.subscribe(result => {
// this.teamlistINT = result
// })

//   }


  //display interface with new tab


}
