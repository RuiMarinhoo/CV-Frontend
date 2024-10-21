import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {catchError, Observable, of} from "rxjs";
import {DevicesApi} from "../../../../../../core/http/devices-api";

@Component({
  selector: 'app-ac',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ac.component.html',
  styleUrl: './ac.component.css'
})
export class AcComponent {

  _device: any;
  get device(): any {
    return this._device;
  }
  @Input() set device(value: any) {
    this._device = value;
    this.climate = this.device.entities_list.find((s: any) => s.entity_id.includes('climate'))
    this.sensor = this.device.entities_list.find((s: any) => s.entity_id.includes('sensor'))
  }

  climate: any = null
  sensor: any = null

  constructor(private devicesApi: DevicesApi) { }

  valueChanged(e: any, entity: any) {
    this.climate.attributes.temperature = e.target.value;
    const update = {
      service: 'set_temperature',
      domain: 'climate',
      entity: {
        entity_id: entity.entity_id,
        temperature: this.climate.attributes.temperature
      }
    }
    console.log(update)
    this.devicesApi.updateDevice(update).pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      // console.log('There was an error!', error.error);
      return of();
    })).subscribe(devices => {
      console.log(devices)
      // this.getDevice(entity.entity_id)
    });
  }

  changeDeviceState(state: string, entity: any){
    const update = {
      service: 'set_hvac_mode',
      domain: 'climate',
      entity: {
        entity_id: entity.entity_id,
        hvac_mode: state
      }
    }
    this.devicesApi.updateDevice(update).pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      // console.log('There was an error!', error.error);
      return of();
    })).subscribe(devices => {
      console.log(devices)
    });
  }


  ngOnInit(): void {}
}
