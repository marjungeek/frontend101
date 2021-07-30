import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { weatherInterface } from './interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  weatherAPI = "api.openweathermap.org/data/2.5/weather?q=Tondo&appid=9c1b4d11d4d2863c5fb161f33fac0700"

  constructor(private http : HttpClient) { }

  getList() : Observable<weatherInterface> {
    return this.http.get<weatherInterface>(this.weatherAPI);
  }
}
