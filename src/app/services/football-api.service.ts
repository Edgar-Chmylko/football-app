import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {
  ApiLeagueResponse,
  ApiMatchHistoryResponse,
  ApiStandingsResponse,
} from '../shared/models/models';
import { EnvironmentService } from './environment.service';

@Injectable({
  providedIn: 'root',
})
export class FootballApiService {
  constructor(
    private httpClient: HttpClient,
    private environmentService: EnvironmentService
  ) {}

  private apiHeaders = {
    'X-RapidAPI-Key': this.environmentService.apiKey,
    'X-RapidAPI-Host': this.environmentService.apiHost,
  };

  currentYear = new Date().getFullYear();

  loadCountryLeague(countryName: string) {
    let httpParams = new HttpParams().append('country', countryName);

    return this.httpClient.get<ApiLeagueResponse>(
      this.environmentService.apiLeaguesUrl,
      {
        headers: this.apiHeaders,
        params: httpParams,
      }
    );
  }
  loadLeagueStandings(leagueId: number) {
    let httpParams = new HttpParams()
      .append('league', leagueId)
      .append('season', this.currentYear);

    return this.httpClient.get<ApiStandingsResponse>(
      this.environmentService.apiLeaguesStandingsUrl,
      {
        headers: this.apiHeaders,
        params: httpParams,
      }
    );
  }

  loadMatchHistory(teamId: number, leagueId: number) {
    let httpParams = new HttpParams()
      .append('team', teamId)
      .append('season', this.currentYear)
      .append('last', 10);

    if (leagueId) {
      httpParams.append('league', leagueId);
    }

    return this.httpClient.get<ApiMatchHistoryResponse>(
      this.environmentService.apiTeamFixturessUrl,
      {
        headers: this.apiHeaders,
        params: httpParams,
      }
    );
  }
}
