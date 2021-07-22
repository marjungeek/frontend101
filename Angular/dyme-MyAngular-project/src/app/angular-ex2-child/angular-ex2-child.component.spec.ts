import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEX2ChildComponent } from './angular-ex2-child.component';

describe('AngularEX2ChildComponent', () => {
  let component: AngularEX2ChildComponent;
  let fixture: ComponentFixture<AngularEX2ChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularEX2ChildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularEX2ChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
