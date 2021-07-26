import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  inputStatus:any = '';
  feederList: any = [{ share: 'Welcome to my News Feed' }];
  collectedLikes: number = 0;
  constructor() {}

  ngOnInit(): void {}

  feedAdd(data: string) {
    this.feederList.unshift({ share: data });
  }

  childevent(data: number) {
    this.collectedLikes = data; // data = total like from the child emitted to the sum event
  }
}

