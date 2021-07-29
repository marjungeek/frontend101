import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamLikesComponent } from './team-likes.component';

describe('TeamLikesComponent', () => {
  let component: TeamLikesComponent;
  let fixture: ComponentFixture<TeamLikesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamLikesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamLikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
