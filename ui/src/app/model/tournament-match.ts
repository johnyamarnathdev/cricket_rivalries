import { Team } from './team'

export class TournamentMatch {
    matchId: number;
    tournamentId: number;
    phaseId: number;
    matchDate: string;
    team1: Team;
    team2: Team;
    teamSelectionCutoffTime: number;
    isPointsCalculated: boolean;
    matchType: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
