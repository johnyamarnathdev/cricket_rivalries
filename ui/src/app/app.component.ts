import { Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, ResolveStart, Router } from '@angular/router';

import { AuthenticationService } from './services/authentication.service';
import { User} from './model/User';
import { Role } from './model/role';
import { delay, filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ui';

  isLoading: boolean;

  currentUser: User;

    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    ngOnInit() {
      this.router.events.pipe(delay(0), filter(event => 
        event instanceof NavigationStart ||
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel ||
        event instanceof NavigationError ||
        event instanceof ResolveStart 
      )
      ).subscribe(event => {
        // If it's the start of navigation, `add()` a loading indicator
        if (event instanceof NavigationStart || event instanceof ResolveStart) {
          this.isLoading = true;
          console.log("IsLoading: ", this.isLoading);
          return;
        }

        // Else navigation has ended, so `remove()` a loading indicator
        this.isLoading = false;
        console.log("IsLoading: ", this.isLoading);
      });
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }   
}
