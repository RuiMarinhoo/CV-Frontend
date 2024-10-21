import {Component, EventEmitter, Input, Output} from '@angular/core';
import {catchError, Observable, of} from "rxjs";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rooms.component.html',
  styleUrl: './rooms.component.css'
})
export class RoomsComponent {

  @Input() public selected_room: any;

  rooms = [
    {
      id: "0",
      name: "Sala",
      icon: "ri-tv-line",
      devices: 4,
      temperature: 22
    },
    {
      id: "1",
      name: "Quarto",
      icon: "ri-hotel-bed-line",
      devices: 4,
      temperature: 20
    },
    {
      id: "2",
      name: "Cozinha",
      icon: "ri-knife-line",
      devices: 4,
      temperature: 25
    },
    {
      id: "3",
      name: "Escritório",
      icon: "ri-computer-line",
      devices: 4,
      temperature: 26
    }
  ]

  @Output() room_change = new EventEmitter<string>();

  constructor() { }

  changeRoom(room_id: string){
    this.room_change.emit(room_id)
    // this.selected_room = room_id
  }

  ngOnInit(): void { }

}
