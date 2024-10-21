import { Component } from '@angular/core';
import {RoomsComponent} from "./components/rooms/rooms.component";
import {DevicesComponent} from "./components/devices/devices.component";
import {DevicesApi} from "../../core/http/devices-api";
import {catchError, Observable, of} from "rxjs";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RoomsComponent, DevicesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  room = "0"

  constructor() { }

  changeRoom(room_id: any){
    this.room = room_id
  }

  ngOnInit(): void { }

}
