import { Tournament } from '../model/tournament'
import { UserProfile } from '../model/user-profile'

export class UserTournamentPoints {
  id: number;
  userProfile: UserProfile;
  tournament: Tournament;
  userName: string;
  firstName: string;
  lastName: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
