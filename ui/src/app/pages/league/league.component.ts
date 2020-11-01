import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { OverallUserPoint } from "src/app/model/overall-user-point";
import { FormControl } from "@angular/forms";
import { TournamentPhase } from "src/app/model/tournament-phase";
import { PhaseUserPointsService } from "src/app/services/phase-user-points.service";
import {MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'

@Component({
  selector: "app-league",
  templateUrl: "./league.component.html",
  styleUrls: ["./league.component.scss"]
})
export class LeagueComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private phasePointsService: PhaseUserPointsService
  ) {}

  overallUserPoints: OverallUserPoint[];

  tournamentPhases: TournamentPhase[];

  option = new FormControl("");

  dataSource = new MatTableDataSource();

  tournamentId: number;

  displayedColumns: string[];

  phaseViewDisplayedColumns: string[] = ["rank", "userName", "points", "transfersLeft"];

  overallViewDisplayedColumns: string[] =  ["rank", "userName", "points"];

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit() {
    this.option.setValue("overall");
    this.displayedColumns = this.overallViewDisplayedColumns;
    this.onChanges();
    this.route.data.subscribe(
      (data: { overallUserPoints: OverallUserPoint[] }) => {
        this.overallUserPoints = data.overallUserPoints;
      }
    );

    this.dataSource.data = this.overallUserPoints;
    this.dataSource.sort = this.sort;
    this.dataSource.sort.active = "rank";
    this.dataSource.sort.direction = "asc";

    this.route.data.subscribe(
      (data: { tournamentPhases: TournamentPhase[] }) => {
        this.tournamentPhases = data.tournamentPhases;
        console.log("Tournament Id: ", this.tournamentPhases[0]);
        if (this.tournamentPhases[0]) {
          this.tournamentId = this.tournamentPhases[0].tournamentId;
        } 
        
        
      }
    );
  }

  onChanges() {
    this.option.valueChanges.subscribe(data => {
      if ("overall" === data) {
        this.dataSource.data = this.overallUserPoints;
        this.displayedColumns = this.overallViewDisplayedColumns;
      } else {
        this.displayedColumns = this.phaseViewDisplayedColumns;
        this.phasePointsService.getPhaseUserPoints(this.tournamentId, data).subscribe(data => {
          this.dataSource.data = data;
        });
      }
    });
  }

  navigate(data: OverallUserPoint) {
    this.router.navigate(["../user-match/1/" + data.profileId], {
      relativeTo: this.route
    });
  }
}
