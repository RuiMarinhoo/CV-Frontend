import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-input-text',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {

  @Input() type: any;

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
