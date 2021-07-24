import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() likeCounter: number = 0;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();



  
addLike() :void{
  this.likeCounter++;
  this.change.emit(this.likeCounter)
}
@Input() feedChild!:any;

  constructor() { }

  ngOnInit(): void {
    console.log(this.feedChild)
  }


}
