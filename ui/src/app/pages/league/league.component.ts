import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OverallUserPoint } from 'src/app/model/overall-user-point';
import { FormControl } from '@angular/forms';
import { TournamentPhase } from 'src/app/model/tournament-phase';
import { PhaseUserPointsService } from 'src/app/services/phase-user-points.service';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {

  constructor(private route: ActivatedRoute, private phasePointsService: PhaseUserPointsService) { }

  overallUserPoints: OverallUserPoint[];

  tournamentPhases: TournamentPhase[];

  option = new FormControl('');

  dataSource = new MatTableDataSource();;

  displayedColumns: string[] = ['rank', 'userName', 'points', 'transfersLeft'];

  @ViewChild(MatSort) sort: MatSort;

  ngOnInit() {
    this.option.setValue('overall');

    this.onChanges();
    this.route.data.subscribe((data: { overallUserPoints: OverallUserPoint[] }) => {
      this.overallUserPoints = data.overallUserPoints;
    });

    this.dataSource.data = this.overallUserPoints;
    this.dataSource.sort = this.sort;
    this.dataSource.sort.active = 'rank';
    this.dataSource.sort.direction = 'asc';

    this.route.data.subscribe((data: { tournamentPhases: TournamentPhase[] }) => {
      this.tournamentPhases = data.tournamentPhases;
    });
  }

  onChanges() {
    this.option.valueChanges.subscribe(data => {
      if ("overall" === data) {
        this.dataSource.data = this.overallUserPoints;
      } else {
        this.phasePointsService.getPhaseUserPoints(data).subscribe(data => {
          this.dataSource.data = data;
        })
      }
    })
  } 
}
