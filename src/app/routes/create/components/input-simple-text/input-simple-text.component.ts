import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-input-simple-text',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-simple-text.component.html',
  styleUrls: ['./input-simple-text.component.scss']
})
export class InputSimpleTextComponent implements OnInit {

  component: any;

  @Output() itemEvent = new EventEmitter<string>();

  constructor() {
    this.component = {
      show_title: true,
      align_value: 0,
      title: 'Nome',
      value: '',
    };
  }

  onInputChange(): void {
    this.itemEvent.emit(this.component)
  }

  ngOnInit(): void {}

}
