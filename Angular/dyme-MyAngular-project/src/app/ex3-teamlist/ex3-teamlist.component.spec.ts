import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EX3TeamlistComponent } from './ex3-teamlist.component';

describe('EX3TeamlistComponent', () => {
  let component: EX3TeamlistComponent;
  let fixture: ComponentFixture<EX3TeamlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EX3TeamlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EX3TeamlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
