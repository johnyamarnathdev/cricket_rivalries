import { Injectable } from '@angular/core';
import { TournamentPhasesService } from 'src/app/services/tournament-phases.service';
import { TournamentPhase } from 'src/app/model/tournament-phase';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TournamentPhasesResolverService implements Resolve<TournamentPhase>{

  constructor(private service: TournamentPhasesService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getTournamentPhases();
  }
}
