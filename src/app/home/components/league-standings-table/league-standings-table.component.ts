import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { Standing } from 'src/app/shared/models/models';

@Component({
  selector: 'app-league-standings-table',
  templateUrl: './league-standings-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeagueStandingsTableComponent {
  @Input() set _standings(val: Standing[]) {
    this.standings.set(val);
  }
  @Input() loading = false;

  standings = signal<Standing[]>([]);
  tableColumns = [
    'position',
    'logo',
    'name',
    'gamesPlayed',
    'gamesWon',
    'gamesLost',
    'gamesDraw',
    'goalDifference',
    'points',
  ];

  getClubName(name: string) {
    return name.replace(/\s+/g, '');
  }
}
