import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Players } from '../model/players';
import { PlayersService } from '../services/players-service';

@Injectable({
    providedIn: 'root'
})
export class PlayersResolverService implements Resolve<Players[]>{
    constructor(private service: PlayersService) { }
    resolve(route: ActivatedRouteSnapshot) {
        return this.service.getPlayers(route.params['tournamentId'])
    }
}
