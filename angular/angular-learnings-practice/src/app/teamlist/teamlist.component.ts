import { Component, OnInit } from '@angular/core';
import { ApiGetTeamService } from '../api-get-team.service';

@Component({
  selector: 'app-teamlist',
  templateUrl: './teamlist.component.html',
  // styleUrls: ['./teamlist.component.css']
  styleUrls: ['../app.component.css']
})
export class TeamlistComponent implements OnInit {

  apiTeamData: any;

  constructor(private getTeamService: ApiGetTeamService) { }

  ngOnInit(): void {
    //Here I assigned the observable to a variable
    const observableHolder = this.getTeamService.getTeamList();

    //Now I need to subscribe so I can see the data, I will follow the documentation for this project
    const myObserver = {
      //Below, I will assign the observable Data to the apiTeamData variable
      next: (observedData: any) => {
        // console.log(observedData.data);
        this.apiTeamData = observedData.data;
        console.log(this.apiTeamData);
        // console.log(typeof(this.apiTeamData));
      },
      error: (err: Error) => console.log('Observer got an error: ' + err),
      complete: () => console.log('Observer did its job!'),
    };

    observableHolder.subscribe(myObserver);
    /* July 29, 2021: Why does the line below gets executed before the subscribing happens?*/
    // console.log("2" + this.apiTeamData);
  }

}
