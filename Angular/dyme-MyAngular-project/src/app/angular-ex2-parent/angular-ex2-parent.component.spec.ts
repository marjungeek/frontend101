import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularEX2ParentComponent } from './angular-ex2-parent.component';

describe('AngularEX2ParentComponent', () => {
  let component: AngularEX2ParentComponent;
  let fixture: ComponentFixture<AngularEX2ParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularEX2ParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularEX2ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
