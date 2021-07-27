import { Component, OnInit, Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() Hupost:any;
@Output() likes = new EventEmitter<number>();




constructor() {}
  ngOnInit(): void {
  }

  hulikes(likemo:number){
    this.likes.emit(likemo);
}

}
