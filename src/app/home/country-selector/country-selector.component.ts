import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { MatButtonToggleChange } from '@angular/material/button-toggle';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountrySelectorComponent {

  @Output() selectedCountry = new EventEmitter<string>();

  countries = ['England', 'Span', 'Germany', 'France', 'Italy'];

  onCountryChange(country: MatButtonToggleChange) {
    const countryName = country.value;
    this.selectedCountry.emit(countryName);
  }
}
