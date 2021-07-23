import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-newsfeed-component',
  templateUrl: './newsfeed-component.component.html',
  styleUrls: ['./newsfeed-component.component.css']
})
export class NewsfeedComponentComponent implements OnInit {
  like: boolean=false;
  total = 0;

  newsfeed = [
    {Sinulat:"HUHUHUHUHUH",Like:69,Pinindot:false},
    {Sinulat:"HUHUHUHUHUsafaskfsakjfjsafkjsafsakjja",Like:59,Pinindot:false}
  ]

  constructor() { }

  ngOnInit(): void {
    for(let tanga in this.newsfeed){
      this.total += this.newsfeed[tanga].Like;
    }
  }
  bago(sulat:string){
    this.newsfeed.push({Sinulat:sulat,Like:0,Pinindot:false});
  }
  addLike(vad:number){
    if(this.newsfeed[vad].Pinindot == false){
      console.log(this.newsfeed[vad].Pinindot);
      this.newsfeed[vad].Like++;
      this.total++;
      this.newsfeed[vad].Pinindot = !this.newsfeed[vad].Pinindot;
      console.log(this.newsfeed[vad].Pinindot);
    }else{
      console.log(this.newsfeed[vad].Pinindot);
      this.newsfeed[vad].Like--;
      this.total--;
      this.newsfeed[vad].Pinindot = !this.newsfeed[vad].Pinindot;
      console.log(this.newsfeed[vad].Pinindot);
    }
  }

}
