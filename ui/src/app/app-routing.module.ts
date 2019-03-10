import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { LeagueComponent } from './pages/league/league.component';
import { RulesComponent } from './pages/rules/rules.component';
import { UserMatchComponent } from './pages/user-match/user-match.component';
import { PlayersComponent } from './pages/players/players.component';
import { OverallPointsResolverService } from './pages/league/overall-points-resolver.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'league',
    component: LeagueComponent,
    resolve: {
      overallUserPoints: OverallPointsResolverService
    }
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'user-match',
    component: UserMatchComponent
  },
  {
    path: 'players',
    component: PlayersComponent
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
