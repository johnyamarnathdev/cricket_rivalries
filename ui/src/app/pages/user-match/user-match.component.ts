import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  Router,
  ActivatedRoute
} from "@angular/router";
import { TournamentMatch } from "src/app/model/tournament-match";
import { User } from "src/app/model/user";

@Component({
  selector: "app-user-match",
  templateUrl: "./user-match.component.html",
  styleUrls: ["./user-match.component.css"]
})
export class UserMatchComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  matchFormControl = new FormControl();

  userFormControl = new FormControl();

  selectedUserProfileId: number;

  selectedMatchId: number;

  tournamentMatches: TournamentMatch[];

  users: User[];

  selected: any;
  ngOnInit() {
    this.route.data.subscribe(
      (data: { tournamentMatches: TournamentMatch[] }) => {
        this.tournamentMatches = data.tournamentMatches;
      }
    );

    this.route.data.subscribe((data: { users: User[] }) => {
      this.users = data.users;
    });

    var recentMatch = this.tournamentMatches
      .sort((a, b) =>
        a.matchDate < b.matchDate ? 1 : b.matchDate < a.matchDate ? -1 : 0
      )
      .find(match => {
        return match.matchDate < new Date().getTime();
      });

    this.selectedUserProfileId = this.route.snapshot.params["profileId"];
    this.selectedMatchId = recentMatch.matchId;

    this.matchFormControl.setValue(this.selectedMatchId);
    this.userFormControl.setValue(this.selectedUserProfileId);

    this.onChanges();
  }

  onChanges() {
    this.userFormControl.valueChanges.subscribe(selectedUserProfileId => {
      this.selectedUserProfileId = selectedUserProfileId;
      this.loadChild();
    });

    this.matchFormControl.valueChanges.subscribe(selectedMatchId => {
      this.selectedMatchId = selectedMatchId;
      this.loadChild();
    });
  }

  loadChild() {
    this.router.navigate(
      ["../" + this.selectedUserProfileId, this.selectedMatchId],
      {
        relativeTo: this.route
      }
    );
  }
}
