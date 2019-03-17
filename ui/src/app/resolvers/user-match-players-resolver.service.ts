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
    return this.service.getUserMatchPlayers(route.parent.params['profileId']);
  }
}
