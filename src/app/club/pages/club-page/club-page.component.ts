import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs';
import { CountryLeagueService } from 'src/app/services/country-league.service';
import { FootballClubService } from 'src/app/services/football-club.service';

@Component({
  selector: 'app-club-page',
  templateUrl: './club-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ClubPageComponent implements OnInit {
  clubService = inject(FootballClubService);
  countryLeagueService = inject(CountryLeagueService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  loading = signal(false);
  matchHistory = toSignal(this.clubService.matchHistory$, {
    requireSync: true,
  });
  countryLeagueId = toSignal(
    this.countryLeagueService.countryLeague$.pipe(
      filter((x) => !!x),
      map((x) => x!.id)
    )
  );

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      const teamId = params['id'];
      const leagueId = this.countryLeagueId()!;

      this.loading.set(true);

      this.clubService.loadMatchHistory(teamId, leagueId).subscribe({
        complete: () => {
          this.loading.set(false);
        },
        error: () => {
          this.router.navigate(['error']);
        },
      });
    });
  }
}
