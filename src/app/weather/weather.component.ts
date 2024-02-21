import { Component } from '@angular/core';
import { Weather } from '../weather';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  //standalone: true,
  //imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent {
  weather: Weather |undefined
  
  constructor(private weatherservice:WeatherService){}

  search(city:string){
    this.weatherservice.getweather(city).subscribe(weather => this.weather=weather);
  }

}