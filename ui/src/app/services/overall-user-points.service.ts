import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ErrorHandler } from './error-handler'
import { OverallUserPoint } from '../model/overall-user-point';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class OverallUserPointsService {

  private url = environment.apiUrl + 'overalluserpoints';

  constructor(private http: HttpClient, private errorHandler: ErrorHandler) { }

  getOverallUserPoints(): Observable<OverallUserPoint> {
    return this.http.get<OverallUserPoint>(this.url, httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError<OverallUserPoint>('getOverallUserPoints'))
      );
  }
}
