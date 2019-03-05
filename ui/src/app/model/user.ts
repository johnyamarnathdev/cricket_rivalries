export class User {
  id: number;
  userName: string;
  firstName: string;
  lastName: string;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
