import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home/pages/home-page/home-page.component';
import { CountrySelectorComponent } from './home/components/country-selector/country-selector.component';
import { LeagueStandingsTableComponent } from './home/components/league-standings-table/league-standings-table.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { MatchHistoryTableComponent } from './club/components/match-history/match-history-table.component';
import { ClubPageComponent } from './club/pages/club-page/club-page.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ErrorPageComponent } from './shared/pages/error-page/error-page.component';
import { ButtonComponent } from './shared/components/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CountrySelectorComponent,
    LeagueStandingsTableComponent,
    LoadingComponent,
    ClubPageComponent,
    MatchHistoryTableComponent,
    ErrorPageComponent,
    ButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    HttpClientModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
