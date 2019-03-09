export class Tournament {
    tournamentId: number;
    name: string;
    startDate: Date;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
