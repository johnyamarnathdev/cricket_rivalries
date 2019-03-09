export class Team {
    teamId: number;
    name: string;
    nickName: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
