export class UserProfile {
    profileId: number;
    username: string;
    firstName: string;
    lastName: string;
    emailId: string;

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
