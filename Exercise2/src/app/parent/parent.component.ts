import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  input: string = 'none';
  TotalLike: number = 0;
  Status:boolean = false;

  ngOnInit(): void {
  }

  onSubmit(event: string){
    this.input=event;
    console.log('submitted', this.input);
  }

  Method(data:number){
    this.TotalLike=data;
  }

  Change(){
    this.Status=!this.Status;
    console.log('Exercise No. 2 current status is ${this.Status}');
  }

  Terminate(){
    this.Status = false;
  }

}
