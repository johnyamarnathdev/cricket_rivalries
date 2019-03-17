import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import {
  Router,
  ActivatedRoute,
  ActivatedRouteSnapshot
} from "@angular/router";
import { TournamentMatch } from "src/app/model/tournament-match";

@Component({
  selector: "app-user-match",
  templateUrl: "./user-match.component.html",
  styleUrls: ["./user-match.component.css"]
})
export class UserMatchComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  userFormControl = new FormControl();

  matchFormControl = new FormControl();

  selectedUserProfileId: number = 1;

  selectedMatchId: number = 3;

  users: any[] = [
    {
      userName: "kalakaleleven",
      profileId: 1
    },
    {
      userName: "player2",
      profileId: 2
    }
  ];

  tournamentMatches: TournamentMatch[];

  selected: any;
  ngOnInit() {
    console.log(this.route.snapshot.params.profileId);
    this.userFormControl.setValue(this.selectedUserProfileId);
    this.matchFormControl.setValue(this.selectedMatchId);
    this.route.data.subscribe(
      (data: { tournamentMatches: TournamentMatch[] }) => {
        this.tournamentMatches = data.tournamentMatches;
      }
    );

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
      { relativeTo: this.route }
    );
  }
}
