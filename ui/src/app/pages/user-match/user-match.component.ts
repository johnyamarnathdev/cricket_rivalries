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
      });

    this.route.data.subscribe((data: { users: User[] }) => {
      this.users = data.users;
    });

    var recentMatch = this.tournamentMatches
        .sort((a, b) =>{	
          let datea = new Date(a.matchDateTime).getTime();	
          let dateb = new Date(b.matchDateTime).getTime();	

        return datea < dateb ? 1 : dateb < datea ? -1 : 0	
      }	
      )
      .find(match => {
        return new Date(match.matchDateTime).getTime() < new Date().getTime();
      });

    this.selectedUserProfileId = this.route.snapshot.params["profileId"];
    console.log("Select user profile id: " + this.selectedUserProfileId);
    this.selectedMatchId = recentMatch.matchId;
    this.matchFormControl.setValue(this.selectedMatchId);
    this.userFormControl.setValue(parseInt(this.route.snapshot.params["profileId"]));
    this.loadChild();
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
    console.log("Loading Child");

    this.router.navigate(
      ["../" + this.selectedUserProfileId, this.selectedMatchId],
      {
        relativeTo: this.route
      }
    );
  }
}
