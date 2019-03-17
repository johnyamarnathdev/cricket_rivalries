import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserMatchPoint } from '../model/user-match-point';
import { UserMatchPointsService } from '../services/user-match-points.service';

@Injectable({
    providedIn: 'root'
})
export class UserMatchPointsResolverService implements Resolve<UserMatchPoint>{

    constructor(private service: UserMatchPointsService) { }

    resolve(route: ActivatedRouteSnapshot) {
        console.log(route.params);
        console.log(route.parent);
        return this.service.getUserMatchPoints(route.parent.params['profileId'], route.params['matchId']);
    }
}
