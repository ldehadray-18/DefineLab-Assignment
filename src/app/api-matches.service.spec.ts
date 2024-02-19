import { TestBed } from '@angular/core/testing';

import { ApiMatchesService } from './api-matches.service';

describe('ApiMatchesService', () => {
  let service: ApiMatchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMatchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
