import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';
import { LeagueNames } from 'src/app/shared/models/models';

export interface Country {
  name: string;
  league: LeagueNames;
}

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountrySelectorComponent {
  @Output() selectedCountry = new EventEmitter<Country>();

  countries: Country[] = [
    { name: 'England', league: 'Premier League' },
    { name: 'France', league: 'Ligue 1' },
    { name: 'Germany', league: 'Bundesliga' },
    { name: 'Italy', league: 'Serie A' },
    { name: 'Spain', league: 'La Liga' },
  ];

  onCountryChange(country: MatButtonToggleChange) {
    const selectedCountry = country.value;
    this.selectedCountry.emit(selectedCountry);
  }
}
