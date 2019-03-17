import { Injectable } from '@angular/core';
import { TournamentMatch } from '../model/tournament-match'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getTournamentMatches(tournamentId: number): Observable<TournamentMatch[]> {
    const url = `${this.url}/${tournamentId}`;
    return this.http.get<TournamentMatch[]>(url, httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError<TournamentMatch[]>('getTournamentMatches'))
      );
  }
}
