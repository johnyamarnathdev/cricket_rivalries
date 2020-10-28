import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table'
import { ActivatedRoute } from '@angular/router';
import { Players } from 'src/app/model/players';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  //dataSource = new MatTableDataSource(this.people);

  nameFilter = new FormControl('');
  skillFilter = new FormControl('');
  teamFilter = new FormControl('');
 
  dataSource = new MatTableDataSource();
  columnsToDisplay = ['playerNickName', 'teamNickName', 'skillCode', 'battingPoints', 'bowlingPoints', 'fieldingPoints', 'bonusPoints', 'totalPoints'];
  filterValues = {
    playerNickName: '',
    teamNickName: '',
    skillCode: '',
    battingPoints: '', bowlingPoints: '', fieldingPoints: '', bonusPoints: '', totalPoints:''
  };

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private route: ActivatedRoute) {
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngOnInit() {
    this.route.data.subscribe((data: {players: Players[]}) => {
      this.dataSource.data = data.players;
    });
    
    this.nameFilter.valueChanges
      .subscribe(
        name => {
          this.filterValues.playerNickName = name;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.skillFilter.valueChanges
      .subscribe(
        skill => {
          this.filterValues.skillCode = skill;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )
    this.teamFilter.valueChanges
      .subscribe(
        teamName => {
          this.filterValues.teamNickName = teamName;
          this.dataSource.filter = JSON.stringify(this.filterValues);
        }
      )

      this.dataSource.sort = this.sort;
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function(data, filter): boolean {
      let searchTerms = JSON.parse(filter);
      return data.playerNickName.toLowerCase().indexOf(searchTerms.playerNickName.toLowerCase()) !== -1
        && data.teamNickName.toString().toLowerCase().indexOf(searchTerms.teamNickName.toLowerCase()) !== -1
        && data.skillCode.toLowerCase().indexOf(searchTerms.skillCode.toLowerCase()) !== -1;
    }
    return filterFunction;
  }

}
