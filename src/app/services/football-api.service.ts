import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class FootballApiService {
  constructor(private httpClient: HttpClient) { }

  private key = '15c3e0d175msh31064e99f5ec2adp121581jsnc9cde07b494c';
  private host = 'api-football-v1.p.rapidapi.com';
  private leaguesUrl = 'https://api-football-v1.p.rapidapi.com/v3/leagues';

  loadCountryLeague(countryName: string) {
    let httpParams = new HttpParams().append('country', countryName);

    return this.httpClient.get<any>(this.leaguesUrl,{headers:{'X-RapidAPI-Key': this.key, 'X-RapidAPI-Host': this.host}, params: httpParams});
  }
}
