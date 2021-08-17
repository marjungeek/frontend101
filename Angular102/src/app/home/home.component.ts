import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gusto:number=0;

  list:any = [
    {status:'Hi Guys!'},
    {status:'Baka Renejay To!'},
    {status:'i i i ?'},
    {status:'DOLOOOOO!!'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addPost(status:string){
    console.log('try posting...')
    this.list.push({status: status})
  }

  dagdagGusto(avatar:number=0){
    this.gusto++;
  }

}
