import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-textbox-component',
  templateUrl: './textbox-component.component.html',
  styleUrls: ['./textbox-component.component.css']
})
export class TextboxComponentComponent implements OnInit {
  @Output() newSulat = new EventEmitter<string>();
  @Input() likeCount = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onSubmitFeed(dfdf:string){
    this.newSulat.emit(dfdf);
    console.log(dfdf);
  }

}