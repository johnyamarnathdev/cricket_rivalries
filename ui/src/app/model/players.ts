export class Players {
    playerId: number;
    playerName: string;
    playerNickName: string;
    skillCode: string;
    teamName: string;
    teamNickName: string;
    bowlingPoints: number;
    battingPoints: number;
    fieldingPoints: number;
    bonusPoints: number;
    totalPoints: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}