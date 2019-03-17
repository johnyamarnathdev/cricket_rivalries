import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ErrorHandler } from './error-handler'
import { UserMatchPoint } from '../model/user-match-point';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserMatchPointsService {

  private url = environment.apiUrl + 'usermatchpoints';

  constructor(private http: HttpClient, private errorHandler: ErrorHandler) { }

  getUserMatchPoints(profileId: number, matchId: number): Observable<UserMatchPoint> {
    const url = `${this.url}/${profileId}/${matchId}`;
    return this.http.get<UserMatchPoint>(url, httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError<UserMatchPoint>('getUserMatchPoints'))
      );
  }
}
