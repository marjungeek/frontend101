import { Component, Input , EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Exe2';
  @Input() newpost = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  onSubmitFeed(npost:string){
    this.newpost.emit(npost);
    console.log(npost);
  }

}

