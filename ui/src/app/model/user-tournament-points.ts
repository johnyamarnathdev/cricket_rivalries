import { Tournament } from '../model/tournament'
import { UserProfile } from '../model/user-profile'

export class UserTournamentPoints {
  id: number;
  userProfile: UserProfile;
  tournament: Tournament;
  points: number;
  rank: number;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
