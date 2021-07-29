import { Component, OnInit, Output, EventEmitter } from '@angular/core';

//Will import 2 below so I can get the id from the routerLink throw
//And to access the service "api-get-team" service
import { ActivatedRoute } from '@angular/router';
import { ApiGetTeamService } from '../api-get-team.service';

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  // styleUrls: ['./team-details.component.css']
  styleUrls: ['../app.component.css']
})
export class TeamDetailsComponent implements OnInit {

  specificTeam: any;

  @Output() likeEvent = new EventEmitter<number>();
  likeCounter: number = 1;

  constructor(private getTeam: ApiGetTeamService, private aRoute: ActivatedRoute) { }

  ngOnInit(): void {
    //To take id from the URL, check documentation for "snapshot" and "paramMap"
    const thrownId = this.aRoute.snapshot.paramMap.get('id')!;

    const observableHolder = this.getTeam.getTeamList();

    const myObserver = {
      next: (observedData: any) => {
        // console.log(observedData.data[0]);
        // console.log(typeof(observedData.data[0])); /*returns object type*/
        // console.log(Object.keys(observedData.data).length);
        // console.log("separator 2");
        // console.log(thrownId);
        // console.log(observedData.data);
        // console.log(Object.entries(observedData.data));
        for (let i=0; i < Object.keys(observedData.data).length; i++){
          if (observedData.data[i].id == thrownId) {
            this.specificTeam = observedData.data[i]
            // this.specificTeam = Object.entries(observedData.data[i])
          }
        }
      },
      error: (err: Error) => console.log('Error: ' + err),
      complete: () => console.log(this.specificTeam)
    }

    observableHolder.subscribe(myObserver);
  }

  addLikeEvent() {
    console.log("Like Triggered");
    let eventCounter = this.likeCounter++
    this.likeEvent.emit(eventCounter);
  }

}
