import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ErrorHandler } from './error-handler'
import { environment } from '../../environments/environment';
import { UserTransfer } from '../model/user-transfer';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserTransfersService {

  private url = environment.apiUrl + 'usertransfers';

  constructor(private httpClient: HttpClient, private errorHandler: ErrorHandler) { }

  getUserTransfers(profileId: number, phaseId: number): Observable<UserTransfer> {
    const url = `${this.url}/${profileId}/${phaseId}`;
    return this.httpClient.get<UserTransfer>(url, httpOptions)
      .pipe(
        catchError(this.errorHandler.handleError<UserTransfer>(''))
      );
  }
}
