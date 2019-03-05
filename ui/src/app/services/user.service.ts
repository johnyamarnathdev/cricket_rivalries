import { Injectable } from '@angular/core';
import { User } from '../model/user'
import { Observable, of } from 'rxjs';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

import { environment } from '../../environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userURL = environment.apiUrl + 'user';
  constructor(private http: HttpClient) { }

  getUser(id: number): Observable<User> {
    const url = `${this.userURL}/${id}`;
    return this.http.get<User>(url, httpOptions)
      .pipe(
        catchError(this.handleError<User>('getUSer'))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      alert(error.error.message);

      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
