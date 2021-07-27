import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EX3TeamComponent } from './ex3-team.component';

describe('EX3TeamComponent', () => {
  let component: EX3TeamComponent;
  let fixture: ComponentFixture<EX3TeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EX3TeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EX3TeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
