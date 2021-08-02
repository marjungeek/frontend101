import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeCastComponent } from './fore-cast.component';

describe('ForeCastComponent', () => {
  let component: ForeCastComponent;
  let fixture: ComponentFixture<ForeCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeCastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForeCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
