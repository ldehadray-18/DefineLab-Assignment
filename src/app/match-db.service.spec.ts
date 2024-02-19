import { TestBed } from '@angular/core/testing';

import { MatchDbService } from './match-db.service';

describe('MatchDbService', () => {
  let service: MatchDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
