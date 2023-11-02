import { ChangeDetectionStrategy, Component } from '@angular/core';

interface clubInformation {
  position: number,
  clubLogo: string,
  clubName: string,
  gamesPlayed: number,
  gamesWon: number,
  gamesLost: number,
  gamesDraw: number,
  goalDifference: number,
  points: number
}

@Component({
  selector: 'app-league-standings-table',
  templateUrl: './league-standings-table.component.html',
  styleUrls: ['./league-standings-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LeagueStandingsTableComponent {

 data: clubInformation[]= [{
  position: 1,
  clubLogo: '',
  clubName: 'Ajax',
  gamesPlayed: 10,
  gamesWon: 2,
  gamesLost: 5,
  gamesDraw: 3,
  goalDifference: 6,
  points: 10
 }]

 displayedColumns = ['position','clubLogo','clubName','gamesPlayed','gamesWon','gamesLost','gamesDraw','goalDifference','points']
}
