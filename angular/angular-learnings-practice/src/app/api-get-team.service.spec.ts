import { TestBed } from '@angular/core/testing';

import { ApiGetTeamService } from './api-get-team.service';

describe('ApiGetTeamService', () => {
  let service: ApiGetTeamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiGetTeamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
