import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingInjectComponent } from './using-inject.component';

describe('UsingInjectComponent', () => {
  let component: UsingInjectComponent;
  let fixture: ComponentFixture<UsingInjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingInjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingInjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
