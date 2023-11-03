import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DailyWeather } from './models/weather.model';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  private baseUrl = 'http://localhost:8080/api/weather';

  constructor(private http: HttpClient) {}

  getDailyWeather(): Observable<DailyWeather> {
    return this.http.get<DailyWeather>(`${this.baseUrl}/daily`);
  }
}
