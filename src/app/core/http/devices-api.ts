import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ApiInfo} from "./api-info";

@Injectable({
  providedIn: 'root'
})
export class DevicesApi {

  constructor(
    private http: HttpClient,
    private api: ApiInfo
  ) { }

  //#region HTTP Requests
  getDevice(entity_id: string) {
    return this.http.get(this.api.apiURL + `/devices`,
      {responseType: 'json'});
  }
  getDevices() {
    return this.http.get(this.api.apiURL + `/devices`,
      {responseType: 'json'});
  }
  addEmployee(employee: any){
    return this.http.post(this.api.apiURL + `/operators`, employee,
      {responseType: 'text'});
  }
  editEmployee(employee_id: any, employee: any){
    return this.http.patch(this.api.apiURL + `/operators/${employee_id}`, employee,
      {responseType: 'text'});
  }
  updateDevice(device: any){
    return this.http.post(this.api.apiURL + `/devices`, device,
      {responseType: 'text'});
  }
  deleteEmployee(employee_id: any){
    return this.http.delete(this.api.apiURL + `/operators/${employee_id}`,
      {responseType: 'text'});
  }
  //#endregion


}
