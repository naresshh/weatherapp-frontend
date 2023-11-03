
export class DailyWeather {
    dayName: string;
    tempHighCelsius: number;
    forecastBlurp: string;

      constructor(dayName: string, tempHighCelsius: number, forecastBlurp: string) {
        this.dayName = dayName;
        this.tempHighCelsius = tempHighCelsius;
        this.forecastBlurp = forecastBlurp;
      }
  }
  