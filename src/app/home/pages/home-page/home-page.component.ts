import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
import { CountryLeagueService } from 'src/app/services/country-league.service';
import { Country } from '../../components/country-selector/country-selector.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  countryLeagueService = inject(CountryLeagueService);
  router = inject(Router)

  loading = signal<boolean>(false);
  countryLeagueId = toSignal(
    this.countryLeagueService.countryLeague$.pipe(
      filter((x) => !!x),
      map((x) => x!.id)
    )
  );
  leagueStandings = toSignal(this.countryLeagueService.leagueStandings$, {
    requireSync: true,
  });

  loadLeagueStandings = effect(
    () => {
      const leagueId = this.countryLeagueId();
      if (leagueId) {
        this.loading.set(true);
        this.countryLeagueService.loadLeagueStandings(leagueId).subscribe({
          complete: () => {
            this.loading.set(false);
          },
          error: () => {
            this.router.navigate(['error']);
          }
        });
      }
    },
    { allowSignalWrites: true }
  );

  onSelectedCountry(selectedCountry: Country) {
    this.countryLeagueService.loadCountryLeague(selectedCountry).subscribe();
  }
}
