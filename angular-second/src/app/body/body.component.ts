import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() userPost: any;
  @Output() likeEvent = new EventEmitter<number>();

  likenum = 0;

  handleLike() {
    this.likenum = this.likenum + 1;
    this.result()
    this.likeEvent.emit(this.likenum)
  }

  result(){
    console.log(this.likenum)
  }

  statusList:any = [
    {user: 'Apple',status: 'Apple announces iPhone 12 and iPhone 12 mini: A new era for iPhone with 5G.'},
    {user: 'Samsung', status: 'Samsung Unveils Five New Power Devices in the Galaxy Ecosystem To Empower Your Work and Play.'},
    {user: 'Nintendo', status: 'Nintendo announces Nintendo Switch OLED Model with a vibrant 7-inch OLED screen launching Oct. 8.'}
  ]

  postStatus(status: string){
    this.statusList.push({status: status});
    console.log(this.statusList)
  }


}
