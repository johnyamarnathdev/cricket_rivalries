import { User } from "../model/user";
import { Tournament } from "../model/tournament";

export class SessionUtil {
  constructor() {}

  getUser(): User {
    return JSON.parse(sessionStorage.getItem("currentUser"));
  }

  getTournament(): Tournament {
    return JSON.parse(sessionStorage.getItem("tournament"));
  }
}
