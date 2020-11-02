import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserMatchPlayer } from "src/app/model/user-match-player";
import { UserMatchPoint } from "src/app/model/user-match-point";
import { UserTransfer } from "src/app/model/user-transfer";

@Component({
  selector: "app-user-match-view",
  templateUrl: "./user-match-view.component.html",
  styleUrls: ["./user-match-view.component.css"]
})
export class UserMatchViewComponent implements OnInit {
 // @Input() user; //: Observable<any>;

  constructor(private route: ActivatedRoute) {}

  matchPlayers: UserMatchPlayer[];

  matchPoints: UserMatchPoint[];

  transfersLeft: UserTransfer;

  displayedColumns: string[] = ['skill', 'playerNickName', 'team', 'points', 'owner'];

  selectedProfileId: number;

  ngOnInit() {
    this.route.parent.params.subscribe(data => {
      this.selectedProfileId = data.profileId;
    });
   
    this.route.data.subscribe((data: { matchPlayers: UserMatchPlayer[] }) => {
      if (data.matchPlayers) {
        this.matchPlayers = data.matchPlayers.sort((a, b) => {
          if (a.totalPoints < b.totalPoints) {
            return 1;
          } else if (a.totalPoints > b.totalPoints) {
            return -1;
          } else {
            return 0;
          }
        });
      }
    });

    this.route.data.subscribe((data: { matchPoints: UserMatchPoint[] }) => {
      this.matchPoints = data.matchPoints;
    });
  }
}
