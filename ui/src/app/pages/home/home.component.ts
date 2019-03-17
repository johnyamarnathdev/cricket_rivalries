import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';
import { TournamentMatchesService } from '../../services/tournament-matches.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private user: User;

  constructor(private userService: UserService, private tournamentMatchesService: TournamentMatchesService) { }

  ngOnInit() {
   // this.getTournamentMatches();
  }

  getUser() {
    //this.userService.getUser(1)
    //  .subscribe(user => this.user = user);
  }

  getTournamentMatches() {
    this.tournamentMatchesService.getTournamentMatches(1)
      .subscribe();
  }
}
