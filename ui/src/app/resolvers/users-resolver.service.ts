import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { UserTransfer } from 'src/app/model/user-transfer';
import { UserTransfersService } from 'src/app/services/user-transfers.service';
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<User[]>{

  constructor(private service: UserService) { }

  resolve(route: ActivatedRouteSnapshot) {
    return this.service.getAll1();
  }
}
