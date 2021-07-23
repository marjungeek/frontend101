import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Parent Component';


  likes:number = 0;

  Hupost:any = [
    { Npost: 'Lorem ipsum dolor sit amet, te per idque timeam vulputate, est te mollis vocent. Eum summo inciderint voluptatibus eu.'},
    { Npost: 'Lorem ipsum dolor sit amet, te per idque timeam vulputate, est te mollis vocent. Eum summo inciderint voluptatibus eu.'},

  ];

  constructor() {
}
  postHu(Npost:string){
    if (Npost == ''){
      alert('No Input!');
    }else
    this.Hupost.push({Npost: Npost});
  }
  likeshu(numlikes:number){
    this.likes++;
    console.log(this.likes);
    }
  }



