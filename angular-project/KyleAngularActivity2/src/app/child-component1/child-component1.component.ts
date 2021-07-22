import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child-component1',
  templateUrl: './child-component1.component.html',
  styleUrls: ['./child-component1.component.css']
})
export class ChildComponent1Component implements OnInit {
  @Input() NewsFeed:any; //from parent displays the submit
  @Output() likes = new EventEmitter<number>(); //from child
  constructor() { }

  ngOnInit(): void {
  }

//add like counter
addlike(LIKE:number){
this.likes.emit(LIKE);
console.log("adlike");
}

//child

}
