import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.css']
})
export class ProfileComponentComponent implements OnInit {

  title:string = '_____';
  loadState:string = 'Loading . . . ';
  readyState:string = "Finished !!!";
  count:number = 0;
  inp!:string;

  constructor() {}

  ngOnInit(): void {
  }

  inputName(event: any) {
    // this.inp = event.target.value;
    this.title=event.target.value;
  }



  changeLabel(lbl:string, hdr:string){

    this.count++;

    if(this.count%2==0){
      // alert('Finished!')
        document.getElementById(lbl)!.innerHTML = this.readyState;
        document.getElementById(hdr)!.style.backgroundColor='green';
        // this.title=this.inp;
      }else{
        // alert('Go Back!');
        document.getElementById(lbl)!.innerHTML = this.loadState;
        document.getElementById(hdr)!.style.backgroundColor='red';
      }

  }


}

