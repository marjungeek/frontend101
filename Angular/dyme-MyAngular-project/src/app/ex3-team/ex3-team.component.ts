import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-ex3-team',
  templateUrl: './ex3-team.component.html',
  styleUrls: ['./ex3-team.component.css']
})
export class EX3TeamComponent implements OnInit {

  @Input() team:string='';
  @Input() id:string='';
  @Input() index:number=NaN;
  myStyle:string='font-size:';
  myColor:string='background-color: hsl(';
  px='px;';
  end=', 100%, 50%);';


  constructor() { }

  ngOnInit(): void {
  }

}
