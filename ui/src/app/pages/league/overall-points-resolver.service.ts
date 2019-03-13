import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { OverallUserPoint } from 'src/app/model/overall-user-point';
import { OverallUserPointsService } from 'src/app/services/overall-user-points.service';

@Injectable({
  providedIn: 'root'
})
export class OverallPointsResolverService implements Resolve<OverallUserPoint>{

  constructor(private service: OverallUserPointsService) { }

  resolve(route: ActivatedRouteSnapshot) {
    
    return this.service.getOverallUserPoints()
      .pipe(
       // mergeMap
      )
  }
}
