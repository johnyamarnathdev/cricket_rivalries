import { TestBed } from '@angular/core/testing';

import { UserTournamentPointsService } from './user-tournament-points.service';

describe('UserTournamentPointsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserTournamentPointsService = TestBed.get(UserTournamentPointsService);
    expect(service).toBeTruthy();
  });
});
