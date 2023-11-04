import {
  ChangeDetectionStrategy,
  Component,
  Input,
  signal,
} from '@angular/core';
import { MatchHistory } from 'src/app/shared/models/models';

@Component({
  selector: 'app-match-history',
  templateUrl: './match-history-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchHistoryTableComponent {
  @Input() set _matchHistory(val: MatchHistory[]) {
    this.matchHistory.set(val);
  }
  @Input() loading = false;

  matchHistory = signal<MatchHistory[]>([]);

  tableColumns = [
    'homeTeamLogo',
    'homeTeam',
    'homeScore',
    'awayScore',
    'awayTeam',
    'awayTeamLogo',
  ];
}
