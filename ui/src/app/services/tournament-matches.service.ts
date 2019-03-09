import { Injectable } from '@angular/core';
import { TournamentMatches } from '../model/tournament-matches'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { ErrorHandler } from './error-handler'

import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class TournamentMatchesService {
  private url = environment.apiUrl + 'tournamentmatches';

  constructor(private http: HttpClient, private errorHandler: ErrorHandler) { }

  getTournamentMatches(): Observable<TournamentMatches> {
    return this.http.get<TournamentMatches>(this.url, httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError<TournamentMatches>('getTournamentMatches'))
      );
  }
}
