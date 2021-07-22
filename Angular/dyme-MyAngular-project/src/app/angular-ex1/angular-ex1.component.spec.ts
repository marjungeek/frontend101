import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEx1Component } from './angular-ex1.component';

describe('AngularEx1Component', () => {
  let component: AngularEx1Component;
  let fixture: ComponentFixture<AngularEx1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularEx1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularEx1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
