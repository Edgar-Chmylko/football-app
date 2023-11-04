import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {

  get apiKey(): string {
    return environment.apiKey;
  }

  get apiHost(): string {
    return environment.apiHost;
  }

  get apiLeaguesUrl(): string {
    return environment.apiLeaguesUrl;
  }

  get apiLeaguesStandingsUrl(): string {
    return environment.apiLeagueStandingsUrl;
  }

  get apiTeamFixturessUrl(): string {
    return environment.apiTeamFixturesUrl;
  }
}
