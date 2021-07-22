import { Component , OnInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Parent Component';


  likes:number = 1;

  Hupost:any = [
    { Npost: 'Lorem ipsum dolor sit amet, te per idque timeam vulputate, est te mollis vocent. Eum summo inciderint voluptatibus eu.'},
    { Npost: 'Lorem ipsum dolor sit amet, te per idque timeam vulputate, est te mollis vocent. Eum summo inciderint voluptatibus eu.'},

  ];

  constructor() {

  }

  ngOnInit(): void {
  }
  postHu(Npost:string){
    this.Hupost.push({Npost: Npost});
    console.log(this.likes);
  }
  likeshu(numlikes:number){
    this.likes++;
    console.log(this.likes);
    }
  }



