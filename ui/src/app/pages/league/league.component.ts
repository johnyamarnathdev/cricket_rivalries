import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OverallUserPoint } from 'src/app/model/overall-user-point';

@Component({
  selector: 'app-league',
  templateUrl: './league.component.html',
  styleUrls: ['./league.component.scss']
})
export class LeagueComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  overallUserPoints: OverallUserPoint[];

  ngOnInit() {
    this.route.data.subscribe((data: { overallUserPoints: OverallUserPoint[] }) => {
      this.overallUserPoints = data.overallUserPoints;
    });
  }

  displayedColumns: string[] = ['rank', 'name', 'points', 'transfersLeft'];
}
