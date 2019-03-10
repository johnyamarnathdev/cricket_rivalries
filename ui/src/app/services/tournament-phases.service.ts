import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ErrorHandler } from './error-handler'
import { TournamentPhase } from '../model/tournament-phase';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TournamentPhasesService {

  private url = environment.apiUrl + 'tournamentphases';

  constructor(private http: HttpClient, private errorHandler: ErrorHandler) { }

  getTournamentPhases(): Observable<TournamentPhase> {
    return this.http.get<TournamentPhase>(this.url, httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError<TournamentPhase>('getTournamentPhases'))
      );
  }
}
