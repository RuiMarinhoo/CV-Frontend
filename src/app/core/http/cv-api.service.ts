import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiInfo} from "./api-info";

@Injectable({
  providedIn: 'root'
})
export class CvApiService {

  urlGenerate = '/generateCV';
  urlRender = '/render';

  constructor(
    private http: HttpClient,
    private api: ApiInfo
  ) { }

  //#region HTTP Requests
  renderPDF(data: any){
    // return this.http.post(this.api.apiURL + this.urlGenerate + this.urlRender, data, { responseType: 'text' })
    //   .toPromise().then(value => {
    //     return value;
    //   });
    return this.http.post(this.api.apiURL + this.urlGenerate + this.urlRender, data,
      {responseType: 'text'});
  }

  getPDF(data: any){
    // return this.http.post(this.api.apiURL + this.urlGenerate, data, { responseType: 'text' })
    //   .toPromise().then(value => {
    //     return value;
    //   });
    return this.http.post(this.api.apiURL + this.urlGenerate, data,
      {responseType: 'text'});
  }
  //#endregion

}
