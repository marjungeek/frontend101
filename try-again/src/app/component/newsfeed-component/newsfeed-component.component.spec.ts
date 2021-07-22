import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsfeedComponentComponent } from './newsfeed-component.component';

describe('NewsfeedComponentComponent', () => {
  let component: NewsfeedComponentComponent;
  let fixture: ComponentFixture<NewsfeedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsfeedComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsfeedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
