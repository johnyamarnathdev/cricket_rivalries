import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserTransfer } from 'src/app/model/user-transfer';
import { UserTransfersService } from 'src/app/services/user-transfers.service';

@Injectable({
  providedIn: 'root'
})
export class UserTransfersResolverService implements Resolve<UserTransfer>{

  constructor(private service: UserTransfersService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getUserTransfers(route.parent.params['profileId'], route.parent.params['tournamentId']);
  }
}
