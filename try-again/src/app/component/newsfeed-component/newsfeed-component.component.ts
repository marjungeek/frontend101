import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-newsfeed-component',
  templateUrl: './newsfeed-component.component.html',
  styleUrls: ['./newsfeed-component.component.css']
})
export class NewsfeedComponentComponent implements OnInit {
  like: boolean=false;
  newsfeed = [
    {Sinulat:"HUHUHUHUHUH",Like:69},
    {Sinulat:"HUHUHUHUHUsafaskfsakjfjsafkjsafsakjja",Like:59}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  bago(sulat:string){
    this.newsfeed.push({Sinulat:sulat,Like:0});
  }
  addLike(vad:number){
    this.like = !this.like;
    if(this.like == true){
      this.newsfeed[vad].Like++;
    }else{
      this.newsfeed[vad].Like--;
    }
    console.log(this.newsfeed[vad]);
  }

}
