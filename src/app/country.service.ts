import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Country {
  id: number;
  name: string;
}

interface State {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl = 'https://localhost:7225/api'; // Replace with your API base URL

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.apiUrl}/Country/getAll`);
  }

  getStatesByCountry(countryId: number): Observable<State[]> {
    return this.http.get<State[]>(`${this.apiUrl}/State/getByCountry/${countryId}`);
  }
}
