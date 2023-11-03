import { Component, OnInit } from '@angular/core';
import { DailyWeather } from '../models/weather.model';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  dailyWeather: DailyWeather = new DailyWeather('', 0, '');

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.getDailyWeather().subscribe((data) => {
      this.dailyWeather = data;
    });
  }
}
