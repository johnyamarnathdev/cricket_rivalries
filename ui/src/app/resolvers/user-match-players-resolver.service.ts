import { Injectable } from '@angular/core';
import { UserMatchPlayersService } from 'src/app/services/user-match-players.service';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserMatchPlayer } from 'src/app/model/user-match-player';

@Injectable({
  providedIn: 'root'
})
export class UserMatchPlayersResolverService implements Resolve<UserMatchPlayer[]>{

  constructor(private service: UserMatchPlayersService) { }

  resolve(route: ActivatedRouteSnapshot) {
    console.log(route.params['profileId']);
    console.log(route.params['matchId']);

    if (route.params['matchId']) {
      return this.service.getUserMatchPlayerPoints(route.parent.params['profileId'], route.params['matchId']);
    } else {
      return null;
    }
    
  }
}
