import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {remix_icons} from './remix-icons';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";
import * as events from "node:events";

@Component({
  selector: 'app-input-list-icons',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu],
  templateUrl: './input-list-icons.component.html',
  styleUrls: ['./input-list-icons.component.scss']
})
export class InputListIconsComponent implements OnInit {

  component: any;

  icons = remix_icons;
  icons_show = this.icons

  @Output() itemEvent = new EventEmitter<string>();

  constructor() {
    this.component = {
      title: 'Interests',
      align_value: 0,
      list: [{
        value: '',
        icon: 'ri-add-line',
        show_text: true,
        show_icon: true,
        break_value: false
      }]
    };
  }

  addItem(){
    this.component.list.push({
      value: '',
      icon: 'ri-add-line',
      show_text: true,
      show_icon: true,
      break_value: false
    });
  }

  filterIcons(event: any){
    const filter = event.target.value
    if(filter.length !== 0){
      this.icons_show = this.icons.filter(icon => icon.includes(filter))
    } else {
      this.icons_show = this.icons
    }
  }

  onInputChange(): void {
    const component = JSON.parse(JSON.stringify(this.component))
    this.itemEvent.emit(component)
  }

  ngOnInit(): void {
    // margin-right: .5rem

    // flex-flow: wrap;
    // margin-bottom: .5rem
    // <div style="flex-basis: 100%;height: 0;"></div>
  }

}
