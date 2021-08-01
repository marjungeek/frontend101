import { TestBed } from '@angular/core/testing';

import { ApiweatherService } from './apiweather.service';

describe('ApiweatherService', () => {
  let service: ApiweatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiweatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
