import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {AcComponent} from "./components/ac/ac.component";
import {CommonModule} from "@angular/common";
import {DevicesApi} from "../../../../core/http/devices-api";
import {catchError, Observable, of} from "rxjs";
import {ApiInfo} from "../../../../core/http/api-info";
import {TvComponent} from "./components/tv/tv.component";

@Component({
  selector: 'app-devices',
  standalone: true,
  imports: [CommonModule, AcComponent, TvComponent],
  templateUrl: './devices.component.html',
  styleUrl: './devices.component.css'
})
export class DevicesComponent {

  _room: any;
  get room(): any {
    return this._room;
  }
  @Input() set room(value: any) {
    this._room = value;
    this.getDevices()
  }

  devices: any = []

  constructor(private cdRef: ChangeDetectorRef, private api: ApiInfo, private devicesApi: DevicesApi) { }

  getDevices(){
    this.devicesApi.getDevices().pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      // console.log('There was an error!', error.error);
      return of();
    })).subscribe(devices => {
      console.log(devices)
      // this.all_devices = devices
      const room_devices = devices.filter((d: any) => d.room_id === this.room)
      this.devices = room_devices
      this.cdRef.detectChanges();
      console.log(this.devices)
    });
  }

  ngOnInit(): void {
    const eventSource = new EventSource(this.api.apiURL + `/devices/deviceshook`);

    eventSource.onmessage = (event) => {
      console.log(event.data);
      this.getDevices()
    };
    this.getDevices()
  }
}
