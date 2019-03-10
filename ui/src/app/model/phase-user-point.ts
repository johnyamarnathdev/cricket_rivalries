export class PhaseUserPoint {
    profileId: number;
    rank: number;
    userName: string;
    phaseId: number;
    phaseNo: number;
    points: number;
    transfersLeft: number;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
