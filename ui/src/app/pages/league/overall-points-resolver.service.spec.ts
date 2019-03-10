import { TestBed } from '@angular/core/testing';

import { OverallPointsResolverService } from './overall-points-resolver.service';

describe('OverallPointsResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OverallPointsResolverService = TestBed.get(OverallPointsResolverService);
    expect(service).toBeTruthy();
  });
});
