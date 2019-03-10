import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { ErrorHandler } from './error-handler'
import { PhaseUserPoint } from '../model/phase-user-point';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PhaseUserPointsService {

  private url = environment.apiUrl + 'phaseuserpoints';

  constructor(private http: HttpClient, private errorHandler: ErrorHandler) { }

  getPhaseUserPoints(): Observable<PhaseUserPoint> {
    return this.http.get<PhaseUserPoint>(this.url, httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError<PhaseUserPoint>('getPhaseUserPoints'))
      );
  }
}
