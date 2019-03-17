import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LoginComponent } from "./pages/login/login.component";
import { LeagueComponent } from "./pages/league/league.component";
import { RulesComponent } from "./pages/rules/rules.component";
import { UserMatchComponent } from "./pages/user-match/user-match.component";
import { PlayersComponent } from "./pages/players/players.component";
import { OverallPointsResolverService } from "./pages/league/overall-points-resolver.service";
import { HomeLayoutComponent } from "./common-components/layouts/header.layout.component";
import { PublicLayoutComponent } from "./common-components/layouts/public.layout.component";
import { AuthGuard } from "./guards/auth.guard";
import { UserMatchPlayersResolverService } from "./resolvers/user-match-players-resolver.service";
import { UserMatchViewComponent } from "./pages/user-match-players-view/user-match-view.component";
import { TournamentPhasesResolverService } from "./resolvers/tournament-phases-resolver.service";
import { TournamentMatchesResolverService } from "./resolvers/tournament-matches-resolver.service";
import { UserMatchPointsResolverService } from "./resolvers/user-match-points-resolver.service";
import { UserTransfersResolverService } from "./resolvers/user-transfers-resolver.service";

const routes: Routes = [
  {
    path: "login",
    component: PublicLayoutComponent,
    children: [
      {
        path: "",
        component: LoginComponent
      }
    ]
  },
  {path: "home", redirectTo: "/home/league", pathMatch: "full"},
  {
    path: "home",
    component: HomeLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "league",
        component: LeagueComponent,
        resolve: {
          overallUserPoints: OverallPointsResolverService,
          tournamentPhases: TournamentPhasesResolverService
        }
      },
      {
        path: "rules",
        component: RulesComponent
      },
      {
        path: "user-match/:tournamentId/:profileId",
        component: UserMatchComponent,
        data: {
          dummy: 1
        },
        resolve: {
          tournamentMatches: TournamentMatchesResolverService
          //overallUserPoints: OverallPointsResolverService
        },
        children: [
          {
            path: ":matchId",
            component: UserMatchViewComponent,
            resolve: {
              matchPlayers: UserMatchPlayersResolverService,
              matchPoints: UserMatchPointsResolverService,
              transfersLeft: UserTransfersResolverService
            }
          }
        ]
      },
      {
        path: "players",
        component: PlayersComponent
        // data: { roles: [Role.Admin] }
      }
    ]
  },
  { path: "", redirectTo: "/login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
