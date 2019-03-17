import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LeagueComponent } from './pages/league/league.component';
import { RulesComponent } from './pages/rules/rules.component';
import { UserMatchComponent } from './pages/user-match/user-match.component';
import { PlayersComponent } from './pages/players/players.component';
import { OverallPointsResolverService } from './pages/league/overall-points-resolver.service';
import { HomeLayoutComponent } from './common-components/layouts/header.layout.component';
import { PublicLayoutComponent } from './common-components/layouts/public.layout.component';
import { AuthGuard } from './guards/auth.guard';
import { Role } from './model/role';
import { CanActivate } from '@angular/router/src/utils/preactivation';

const routes: Routes = [
  {
    path: 'login',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  },
  {
    path: 'home',
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'league',
        component: LeagueComponent,
        resolve: {
          overallUserPoints: OverallPointsResolverService
        },
      },
	  {
        path: 'rules',
        component: RulesComponent
      },
	  {
        path: 'user-match',
        component: UserMatchComponent
         // data: { roles: [Role.Admin] } 
      },
	  {
        path: 'players',
        component: PlayersComponent
         // data: { roles: [Role.Admin] } 
      }
    ]
  },
  { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
