import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiInfo {

  apiURL = `http://${window.location.hostname}:3000`;
  // apiURL = `http://vps-a81ee269.vps.ovh.net:3000`;

  constructor(private http: HttpClient) {}

}
