import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
arrayData:any;
resultItem: any;
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const dataResult = this.route.snapshot.paramMap.get('id');
    const teamResult = this.apiService.getTeam();
    teamResult.subscribe(teamResult => {
      this.arrayData = teamResult.data;
      console.log(this.arrayData);

      this.resultItem = this.arrayData.find(function(element:any) {
        return element.id === dataResult;
      });

    });


    // const dataResult = this.route.snapshot.paramMap.get('id');
    // const result = this.arrayData = this.apiService.getData(dataResult);
    // result.subscribe(data => {
    //   this.arrayData = data;
    //   console.log(this.arrayData);
    // });
  }

}
