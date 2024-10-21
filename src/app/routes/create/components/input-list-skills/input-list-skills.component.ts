import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

interface Item {
  title: string;
  align_value: number;
  list: ItemList[];
}
interface ItemList {
  text: string;
  value: number;
  align_value: number;
  break_value: boolean;
  dots_value: boolean;
}

@Component({
  selector: 'app-input-list-skills',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-list-skills.component.html',
  styleUrls: ['./input-list-skills.component.scss']
})
export class InputListSkillsComponent implements OnInit {

  component!: Item;
  aligns = [{
    text: 'ri-align-left',
    value: 'justify-content: start;'
  }, {
    text: 'ri-align-center',
    value: 'justify-content: center;'
  }, {
    text: 'ri-align-right',
    value: 'justify-content: end;'
  }, {
    text: 'ri-space',
    value: 'justify-content: space-between;'
  }];


  @Output() itemEvent = new EventEmitter<string>();

  constructor() {
    this.component = {
      title: 'Linguas',
      align_value: 0,
      list: [{
        text: '',
        value: 0,
        align_value: 0,
        break_value: false,
        dots_value: true
      }]
    };
  }

  addItem(){
    this.component.list.push({
      text: '',
      value: 0,
      align_value: 0,
      break_value: false,
      dots_value: true
    });
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
