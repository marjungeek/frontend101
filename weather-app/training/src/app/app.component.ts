import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { weatherInterface } from './interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'training';

  mbData = {"type":"FeatureCollection","query":["las","pinas"],"features":[{"id":"place.6450334252982760","type":"Feature","place_type":["place"],"relevance":1,"properties":{"wikidata":"Q8854"},"text":"Las Piñas","place_name":"Las Piñas, Las Piñas, Philippines","bbox":[120.96460723877,14.3808002471924,121.023681640625,14.493890762329],"center":[120.98333,14.45],"geometry":{"type":"Point","coordinates":[120.98333,14.45]},"context":[{"id":"region.10668121355982760","wikidata":"Q8854","text":"Las Piñas"},{"id":"country.13684120028213680","wikidata":"Q928","short_code":"ph","text":"Philippines"}]}],"attribution":"NOTICE: © 2021 Mapbox and its suppliers. All rights reserved. Use of this data is subject to the Mapbox Terms of Service ..."}
  owmData = {"lat":14.4599,"lon":120.9949,"timezone":"Asia/Manila","timezone_offset":28800,"current":{"dt":1627515543,"sunrise":1627508318,"sunset":1627554369,"temp":298.4,"feels_like":299.41,"pressure":1008,"humidity":93,"dew_point":297.19,"uvi":1.08,"clouds":90,"visibility":7000,"wind_speed":3.58,"wind_deg":286,"wind_gust":7.15,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}]},"daily":[{"dt":1627531200,"sunrise":1627508318,"sunset":1627554369,"moonrise":1627568760,"moonset":1627524300,"moon_phase":0.68,"temp":{"day":301.08,"min":298.4,"max":302.62,"night":300.42,"eve":300.87,"morn":298.92},"feels_like":{"day":305.23,"night":303.39,"eve":304.42,"morn":299.88},"pressure":1007,"humidity":81,"dew_point":297.51,"wind_speed":8.77,"wind_deg":241,"wind_gust":13.14,"weather":[{"id":502,"main":"Rain","description":"heavy intensity rain","icon":"10d"}],"clouds":96,"pop":0.82,"rain":16.19,"uvi":7.43},{"dt":1627617600,"sunrise":1627594733,"sunset":1627640751,"moonrise":1627657320,"moonset":1627613580,"moon_phase":0.71,"temp":{"day":301.86,"min":300.28,"max":302.36,"night":300.28,"eve":300.96,"morn":300.36},"feels_like":{"day":306.14,"night":303.6,"eve":304.92,"morn":303.47},"pressure":1008,"humidity":75,"dew_point":296.9,"wind_speed":8.1,"wind_deg":237,"wind_gust":12.74,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":100,"pop":0.71,"rain":7.02,"uvi":2.5},{"dt":1627704000,"sunrise":1627681148,"sunset":1627727132,"moonrise":1627745880,"moonset":1627702800,"moon_phase":0.75,"temp":{"day":302.59,"min":300.04,"max":302.75,"night":300.36,"eve":300.57,"morn":300.24},"feels_like":{"day":308.42,"night":303.8,"eve":304.33,"morn":303.5},"pressure":1007,"humidity":77,"dew_point":298.02,"wind_speed":8.99,"wind_deg":247,"wind_gust":12.86,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":100,"pop":0.88,"rain":21.14,"uvi":9.07},{"dt":1627790400,"sunrise":1627767563,"sunset":1627813512,"moonrise":0,"moonset":1627792020,"moon_phase":0.77,"temp":{"day":302.82,"min":300.21,"max":302.82,"night":300.73,"eve":301.61,"morn":300.29},"feels_like":{"day":309.05,"night":304.75,"eve":306.43,"morn":303.73},"pressure":1005,"humidity":77,"dew_point":298.26,"wind_speed":10.36,"wind_deg":241,"wind_gust":15.33,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":75,"pop":0.75,"rain":14.89,"uvi":8.96},{"dt":1627876800,"sunrise":1627853978,"sunset":1627899891,"moonrise":1627834560,"moonset":1627881420,"moon_phase":0.8,"temp":{"day":302.2,"min":300.33,"max":302.2,"night":300.66,"eve":301.1,"morn":300.33},"feels_like":{"day":307.81,"night":304.7,"eve":305.43,"morn":303.83},"pressure":1005,"humidity":79,"dew_point":298.19,"wind_speed":9.73,"wind_deg":242,"wind_gust":15.33,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.75,"rain":12.53,"uvi":6.91},{"dt":1627963200,"sunrise":1627940392,"sunset":1627986269,"moonrise":1627923420,"moonset":1627970820,"moon_phase":0.83,"temp":{"day":302.79,"min":300.39,"max":302.79,"night":300.66,"eve":301.22,"morn":300.39},"feels_like":{"day":308.72,"night":304.44,"eve":305.75,"morn":303.99},"pressure":1005,"humidity":76,"dew_point":298.05,"wind_speed":10.31,"wind_deg":234,"wind_gust":16.51,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.88,"rain":9.36,"uvi":7},{"dt":1628049600,"sunrise":1628026806,"sunset":1628072647,"moonrise":1628012460,"moonset":1628060340,"moon_phase":0.86,"temp":{"day":302.94,"min":300.66,"max":302.94,"night":300.87,"eve":301.19,"morn":300.71},"feels_like":{"day":308.88,"night":304.42,"eve":305.51,"morn":304.3},"pressure":1006,"humidity":75,"dew_point":297.96,"wind_speed":10.27,"wind_deg":228,"wind_gust":16.62,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.84,"rain":13.16,"uvi":7},{"dt":1628136000,"sunrise":1628113220,"sunset":1628159023,"moonrise":1628101680,"moonset":1628149860,"moon_phase":0.89,"temp":{"day":303.24,"min":300.52,"max":303.24,"night":301,"eve":301.76,"morn":300.52},"feels_like":{"day":308.66,"night":304.59,"eve":306.26,"morn":303.73},"pressure":1007,"humidity":71,"dew_point":297.36,"wind_speed":9.07,"wind_deg":234,"wind_gust":14.35,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.7,"rain":7.92,"uvi":7}]}

  post! : weatherInterface [];
  constructor(private apiService : ApiService) {}

  ngOninit() : void {
    const result = this.apiService.getList();
    result.subscribe(result => {
      this.post = result.weather;
      console.log(this.post);
    })
  }
}
