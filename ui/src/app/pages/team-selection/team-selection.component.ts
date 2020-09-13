import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-players',
  templateUrl: './team-selection.component.html',
  styleUrls: ['./team-selection.component.css']
})
export class TeamSelectionComponent implements OnInit {

  players = [
    {
      name: 'John', team: 'team1', skill: 'BA', 
      battingPoints: 12, bowlingPoints: 34, fieldingPoints: 33, bonusPoints: 10, totalPoints: 125
    },
    {
      name: 'Sarah', team: 'team2', skill: 'BO', 
      battingPoints: 2, bowlingPoints: 74, fieldingPoints: 98, bonusPoints: 90, totalPoints: 905
    }
  ];

  //dataSource = new MatTableDataSource(this.people);

  nameFilter = new FormControl('');
  skillFilter = new FormControl('');
  teamFilter = new FormControl('');
 
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['name', 'team', 'skill', 'battingPoints', 'bowlingPoints', 'fieldingPoints', 'bonusPoints', 'totalPoints'];
  filterValues = {
    name: '',
    team: '',
    skill: '',
    battingPoints: '', bowlingPoints: '', fieldingPoints: '', bonusPoints: '', totalPoints:''
  };

  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    this.dataSource.data = this.players;
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngOnInit() {

    this.nameFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.name = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.skillFilter.valueChanges
      .subscribe(
        skill => {
          this.filterValues.skill = skill;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.teamFilter.valueChanges
      .subscribe(
        team => {
          this.filterValues.team = team;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

      this.dataSource.sort = this.sort;
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function(data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return data.name.toLowerCase().indexOf(searchTerms.name) !== -1
        && data.team.toString().toLowerCase().indexOf(searchTerms.team) !== -1
        && data.skill.toLowerCase().indexOf(searchTerms.skill) !== -1;
    }
    return filterFunction;
  }

}

