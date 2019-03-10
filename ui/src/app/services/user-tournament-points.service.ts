import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserTournamentPoints } from '../model/user-tournament-points';
import { catchError } from 'rxjs/operators';

import { ErrorHandler } from './error-handler'
import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UserTournamentPointsService {
  private url = environment.apiUrl + 'usertournamentpoints';

  constructor(private httpClient: HttpClient, private errorHandler: ErrorHandler) { }

  getUserTournamentPoints(): Observable<UserTournamentPoints> {
    return this.httpClient.get<UserTournamentPoints>("", httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError<UserTournamentPoints>(''))
      );
  }
}
