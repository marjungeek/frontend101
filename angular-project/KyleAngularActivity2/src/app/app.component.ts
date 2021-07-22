import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Parent Component';
  likes:number = 1;



  NewsFeed:any = [
    { samplepost: "tapang mo ah suntukan tayo"},
    { samplepost: "kalma lang guys bawal mag away"},
    { samplepost: "pasalamat ka anonymous account gamit mo ah"},
    { samplepost: "LF online suntukan Manila area"},
  ];


  humethod(add:number){
    this.likes++;
  }

  PostContent(samplepost: string){
    console.log('testing')
    this.NewsFeed.push({samplepost: samplepost}); //dom manipulations
    //push database
  }

}

//input - parent to child (galing kay parent)
//output - child to parent (galing kay child)
