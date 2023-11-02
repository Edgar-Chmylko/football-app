import { Injectable } from '@angular/core';
import { FootballApiService } from './football-api.service';
import { shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryLeagueService {
  constructor(private footbalApi: FootballApiService) {}

  loadCountryLeague(countryName: string) {
    return this.footbalApi.loadCountryLeague(countryName).pipe(shareReplay());
  }
}
