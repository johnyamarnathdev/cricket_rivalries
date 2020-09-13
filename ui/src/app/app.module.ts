import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { HomeComponent } from './pages/home/home.component';
import { LeagueComponent } from './pages/league/league.component';
import { HeaderComponent } from './common-components/header/header.component';
import { FooterComponent } from './common-components/footer/footer.component';
import { NavBarComponent } from './common-components/nav-bar/nav-bar.component';
import { HomeLayoutComponent } from './common-components/layouts/header.layout.component';
import { PublicLayoutComponent } from './common-components/layouts/public.layout.component';
import { RulesComponent } from './pages/rules/rules.component';
import { UserMatchComponent } from './pages/user-match/user-match.component';
import { PlayersComponent } from './pages/players/players.component';
import { UserMatchViewComponent } from './pages/user-match-players-view/user-match-view.component';

import { fakeBackendProvider } from './helpers/fake-backend';
import { JwtInterceptor,} from './helpers/jwt.interceptor';
import { ErrorInterceptor } from './helpers/error.interceptors';
import { LogoutComponent } from './common-components/logout/logout.component';
import { TeamSelectionComponent } from './pages/team-selection/team-selection.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    LeagueComponent,
    HeaderComponent,
    FooterComponent,
    NavBarComponent,
    HomeLayoutComponent,
    PublicLayoutComponent,
    RulesComponent,
    UserMatchComponent,
    PlayersComponent,
    LogoutComponent,
    UserMatchViewComponent,
    TeamSelectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
