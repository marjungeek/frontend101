import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() post:any
  @Output() add = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  like(count:number){
    console.log(count, + 'bang')
    this.add.emit(count);
}
}

