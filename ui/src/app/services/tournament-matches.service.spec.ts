import { TestBed } from '@angular/core/testing';

import { TournamentMatchesService } from './tournament-matches.service';

describe('TournamentMatchesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TournamentMatchesService = TestBed.get(TournamentMatchesService);
    expect(service).toBeTruthy();
  });
});
