import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiMatchesService {
  collapsed: boolean = false;
  constructor(private http: HttpClient) { }
  getAllMatches() {
    return this.http.get('https://api.foursquare.com/v2/venues/search?ll=40.7484,-73.9857&oauth_token=NPKYZ3WZ1VYMNAZ2FLX1WLECAWSMUVOQZOIDBN53F3LVZBPQ&v=20180616');
  }
  toggletButtonApi() {
    this.collapsed = !this.collapsed;

  }
}
