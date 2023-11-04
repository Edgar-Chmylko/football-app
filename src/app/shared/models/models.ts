export type LeagueNames = 'Premier League' | 'La Liga' | 'Ligue 1' | 'Bundesliga' | 'Serie A'

export interface Country {
  code: string;
  flag: string;
  name: string;
}

export interface CountryLeague {
  id: number;
  logo: string;
  name: string;
  type: string;
}

export interface FootballClub {
  id: number;
  name: string;
  logo: string;
}

export interface Goals {
  for: number;
  against: number;
}

export interface League {
  league: LeagueStandings;
}

export interface MatchesPlayed {
  played: number;
  win: number;
  draw: number;
  lose: number;
  goals: Goals;
}

export interface LeagueSeason {
  current: boolean;
  end: string;
  start: string;
  year: number;
}

export interface LeagueStandings {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
  standings: Standing[];
}

export interface Standing {
  rank: number;
  team: FootballClub[];
  points: number;
  goalsDiff: number;
  form: string;
  status: string;
  description: string;
  all: MatchesPlayed;
  home: MatchesPlayed;
  away: MatchesPlayed;
  update: Date;
}

export interface CountryLeagueResponse {
  country: Country;
  league: CountryLeague;
  seasons: LeagueSeason[];
}

export interface ApiLeagueResponse {
  response: CountryLeagueResponse[];
}

export interface ApiStandingsResponse {
  response: League[];
}

export interface ApiMatchHistoryResponse {
  response: MatchHistory[];
}

export interface MatchHistory {
  goals: GoalHistory;
  score: MatchScore;
  teams: MatchTeams;
}

export interface GoalHistory {
  away: number;
  home: number;
}

export interface MatchScore {
  fulltime: GoalHistory;
}

export interface MatchTeams {
  away: FootballClub;
  home: FootballClub;
}