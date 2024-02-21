import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Weather } from './weather';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  //private apiurl="http://api.openweathermap.org/";
  private apiurl="https://api.openweathermap.org/data/2.5/";
  private apikey="da94d38581836bddbb0a5f15e4a9e84b";

getweather(city:string):Observable<Weather>{
  const options = new HttpParams()
  .set('units', 'metric')
  .set('q',city)
  .set('appId',this.apikey);
  return this.http.get<Weather>(this.apiurl + 'weather', {params:options});

}

}