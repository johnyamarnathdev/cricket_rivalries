import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandler {
  handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      alert(error.error.message);

      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
