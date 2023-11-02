import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CountryLeagueService } from 'src/app/services/country-league.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {
  constructor(private countryLeagueService: CountryLeagueService) {}

  onSelectedCountry(selectedCountry: string) {
    this.countryLeagueService.loadCountryLeague(selectedCountry).subscribe((val) => console.log(val));
  }
}
