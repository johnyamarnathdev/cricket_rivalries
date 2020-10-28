import { Injectable } from '@angular/core';
import { TournamentMatch } from '../model/tournament-match'
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { ErrorHandler } from './error-handler'

import { environment } from '../../environments/environment';
import { Players } from '../model/players';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class PlayersService {
  private url = environment.apiUrl + 'playertotalpoints';

  constructor(private http: HttpClient, private errorHandler: ErrorHandler) { }

  getPlayers(tournamentId: number): Observable<Players[]> {
    const url = `${this.url}/${tournamentId}`;
    return this.http.get<Players[]>(url, httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError<Players[]>('getPlayers'))
      );
  }
}
