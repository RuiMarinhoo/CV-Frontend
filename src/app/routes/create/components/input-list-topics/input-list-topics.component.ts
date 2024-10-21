import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-input-list-topics',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-list-topics.component.html',
  styleUrls: ['./input-list-topics.component.scss']
})
export class InputListTopicsComponent implements OnInit {

  component: any;
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
      title: 'Professional Experience',
      align_value: 0,
      list: [{
        text: '',
        details: '',
        value: '',
        align_value: 0,
        break_value: false,
        dot_value: false
      }]
    };
  }

  addItem(){
    this.component.list.push({
      text: '',
      details: '',
      value: '',
      align_value: 0,
      break_value: false,
      dot_value: false
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
