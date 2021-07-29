import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { teamData } from './interface';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  private URL = 'https://api.first.org/data/v1/teams';

  private numberr = 0;
  private likenumber = new BehaviorSubject<number>(this.numberr);
  hulike = this.likenumber.asObservable();

  constructor(private http: HttpClient) { }

  //https://api.first.org/data/v1/teams?team=accenture
  getTeam(): Observable<[]>{
    return this.http.get<[]>(this.URL);
  }
  getSpecific(team:any): Observable<[]>{
    console.log(team);
    return this.http.get<[]>(`${this.URL}?team=${team}`)
  }

  likeLang(sfsf:string){
    this.likenumber.next(this.numberr++);
  }
}
