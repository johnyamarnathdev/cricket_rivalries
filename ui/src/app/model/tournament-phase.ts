import { Tournament } from './tournament';

export class TournamentPhase {
    phaseId: number;
    phaseNo: number;
    tournament: Tournament;
    startDate: string;
    endDate: string;
}
