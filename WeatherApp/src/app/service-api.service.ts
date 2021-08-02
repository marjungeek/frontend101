import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceAPIService {

  //https://api.mapbox.com/geocoding/v5/mapbox.places/121.085114,14.576377.json?access_token=pk.eyJ1Ijoic21kcGdzMDE3IiwiYSI6ImNrMWhpNWw1NjE4YXEzZGxidTM3aGFpN3kifQ.BkhS66yR3Qx7M3o11qjOEQ

  private URL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
  private Token = 'pk.eyJ1Ijoic21kcGdzMDE3IiwiYSI6ImNrMWhpNWw1NjE4YXEzZGxidTM3aGFpN3kifQ.BkhS66yR3Qx7M3o11qjOEQ';
  private URL2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/121.09111539999999,14.592879.json?access_token=pk.eyJ1Ijoic21kcGdzMDE3IiwiYSI6ImNrMWhpNWw1NjE4YXEzZGxidTM3aGFpN3kifQ.BkhS66yR3Qx7M3o11qjOEQ'
  constructor(private http: HttpClient) { }

  MapBox(lat:any,long:any){
    //return this.http.get(this.URL2);
    console.log(long);
    console.log(lat);
    console.log(`${this.URL}${long}.json?access_token=${this.Token}`);
    return this.http.get(`${this.URL}${long},${lat}.json?access_token=${this.Token}`);
    //return this.http.get(`${this.URL}${long},${lat}.json?access_token=${this.Token}`);
  }
}
