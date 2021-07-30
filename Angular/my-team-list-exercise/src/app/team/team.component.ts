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
Likes: number = 0;
  constructor(private apiService: ApiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const dataResult = this.route.snapshot.paramMap.get('id');
    const teamResult = this.apiService.getTeam();
    teamResult.subscribe(teamResult => {
      this.arrayData = teamResult.data;
      console.log('Get details: ',this.arrayData);
      console.log('Data get ID: ', dataResult);

      this.resultItem = this.arrayData.find(function(element:any) {
        return element.id === dataResult;
      });
      console.log(this.resultItem);
    });

  }
    addLike() {
      this.Likes++;
      console.log("like added");
      console.log(this.Likes);
    }

}
