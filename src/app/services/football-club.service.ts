import { Injectable } from '@angular/core';
import { FootballApiService } from './football-api.service';
import { BehaviorSubject, map, tap } from 'rxjs';
import { MatchHistory } from '../shared/models/models';

@Injectable({
  providedIn: 'root',
})
export class FootballClubService {
  constructor(private footbalApi: FootballApiService) {}

  private matchHistory = new BehaviorSubject<MatchHistory[]>([]);
  matchHistory$ = this.matchHistory.asObservable();

  loadMatchHistory(teamId: number, leagueId: number) {
    return this.footbalApi.loadMatchHistory(teamId, leagueId).pipe(
      map((api) => api.response),
      tap((matchHistory) => this.matchHistory.next(matchHistory))
    );
  }
}
