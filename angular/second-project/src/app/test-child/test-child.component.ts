import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-child',
  templateUrl: './test-child.component.html',
  styleUrls: ['./test-child.component.css']
})
export class TestChildComponent implements OnInit {

  //@Input()

  feedList: any = [{cfeedValue: 'Sample Feed'}];

  constructor() { }

  ngOnInit(): void {
  }

}
