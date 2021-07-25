import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() post:any
  @Output() count = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  clicker(count:number){
    console.log(count, + 'bang')
    this.count.emit(count);
}
}

