import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Data } from '../DataInterface';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TryAPIService {
  private apiURL = 'https://api.first.org/data/v1/teams'
  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get(this.apiURL, { observe: 'response'})
    .pipe(
      map(res => (res.body))
    );
  }
}
