import { TestBed } from '@angular/core/testing';

import { TournamentPhasesResolverService } from './tournament-phases-resolver.service';

describe('TournamentPhasesResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TournamentPhasesResolverService = TestBed.get(TournamentPhasesResolverService);
    expect(service).toBeTruthy();
  });
});
