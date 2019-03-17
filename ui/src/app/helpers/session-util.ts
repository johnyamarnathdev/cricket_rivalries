import { User } from "../model/user";
import { Tournament } from "../model/tournament";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class SessionUtil {
  constructor() {}

  getUser(): User {
    return JSON.parse(sessionStorage.getItem("currentUser"));
  }

  getTournament(): Tournament {
    return JSON.parse(sessionStorage.getItem("tournament"));
  }
}
