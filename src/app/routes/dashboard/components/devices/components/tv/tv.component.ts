import {Component, Input} from '@angular/core';
import {DevicesApi} from "../../../../../../core/http/devices-api";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import moment from 'moment';

@Component({
  selector: 'app-tv',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent {

  _device: any;
  get device(): any {
    return this._device;
  }
  @Input() set device(value: any) {
    this._device = value;
    this.tv = this.device.entities_list.find((s: any) => s.entity_id.includes('media_player.tv_sala_2'))
    this.media = this.device.entities_list.find((s: any) => s.entity_id.includes('media_player.tv_sala'))
    this.tv.volume = Math.round((this.tv.attributes.volume_level * 100) / 1.7)
    const duration = moment.duration(moment.utc(this.media.attributes.media_duration*1000).diff(moment.utc(this.media.attributes.media_position*1000)));
    const h = duration.hours();
    const m = duration.minutes();
    const s = duration.seconds();
    this.media.remaining_duration = (h!==0 ? h + ":" : "00:") + (m!==0 ? m + ":" : "00:") + (s!==0 ? s : "00")
    console.log(this.tv)
    console.log(this.media)
  }

  tv: any = null
  media: any = null

  constructor(private devicesApi: DevicesApi) { }

  ngOnInit(): void {}

  protected readonly Math = Math;
}
