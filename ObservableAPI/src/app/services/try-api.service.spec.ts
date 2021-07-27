import { TestBed } from '@angular/core/testing';

import { TryAPIService } from './try-api.service';

describe('TryAPIService', () => {
  let service: TryAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TryAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
