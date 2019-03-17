import { Injectable } from '@angular/core';
import { TournamentMatch } from 'src/app/model/tournament-match';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { TournamentMatchesService } from 'src/app/services/tournament-matches.service';
import { find } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TournamentMatchesResolverService implements Resolve<TournamentMatch[]>{

  constructor(private service: TournamentMatchesService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getTournamentMatches(route.params['tournamentId']);
  }
}
