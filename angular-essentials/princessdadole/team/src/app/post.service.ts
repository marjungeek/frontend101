import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TeamInterface} from './team';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

getTeams(): Observable <TeamInterface> {
return this.http.get<TeamInterface>('https://api.first.org/data/v1/teams');
}



}

