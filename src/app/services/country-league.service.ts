import { Injectable } from '@angular/core';
import { FootballApiService } from './football-api.service';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { CountryLeague, Standing } from '../shared/models/models';
import { Country } from '../home/components/country-selector/country-selector.component';

@Injectable({
  providedIn: 'root',
})
export class CountryLeagueService {
  constructor(private footbalApi: FootballApiService) {}

  private countryLeague = new BehaviorSubject<CountryLeague | null>(null);
  private leagueStandings = new BehaviorSubject<Standing[]>([]);

  countryLeague$ = this.countryLeague.asObservable();
  leagueStandings$ = this.leagueStandings.asObservable();

  loadCountryLeague(country: Country) {
    return this.footbalApi.loadCountryLeague(country.name).pipe(
      map((api) => {
        return api.response.find(
          (x) =>
            x.country.name === country.name && x.league.name === country.league
        );
      }),
      tap((countryLeague) => this.countryLeague.next(countryLeague!.league))
    );
  }

  loadLeagueStandings(leagueId: number) {
    return this.footbalApi.loadLeagueStandings(leagueId).pipe(
      map((api) => {
        return api.response[0].league.standings.flat();
      }),
      tap((standings) => this.leagueStandings.next(standings))
    );
  }
}
