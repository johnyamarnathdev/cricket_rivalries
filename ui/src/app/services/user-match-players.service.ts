import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ErrorHandler } from './error-handler'
import { UserMatchPlayer } from '../model/user-match-player';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserMatchPlayersService {

  private url = environment.apiUrl + 'usermatchplayerpoints';

  constructor(private http: HttpClient, private errorHandler: ErrorHandler) { }

  getUserMatchPlayerPoints(profileId: number, matchId: number): Observable<UserMatchPlayer[]> {
    const url = `${this.url}/${profileId}/${matchId}`;
    return this.http.get<UserMatchPlayer[]>(url, httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError<UserMatchPlayer[]>('getUserMatchPlayerPoints'))
      );
  }
}