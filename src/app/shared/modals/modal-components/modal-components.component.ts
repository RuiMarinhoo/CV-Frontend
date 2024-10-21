import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-budget',
  standalone: true,
  imports: [],
  templateUrl: './modal-components.component.html',
  styleUrls: ['./modal-components.component.css']
})
export class ModalComponentsComponent implements OnInit {

  @Input() public title: any;
  @Input() public data: any;
  @Input() public btns: any;

  components = [
    {
      type: 'photo',
      isCollapsed: true,
      value: null,
    }, {
      type: 'text',
      isCollapsed: true,
      value: null,
    },  {
      type: 'simple-text',
      isCollapsed: true,
      value: null,
    }, {
      type: 'list-skills',
      isCollapsed: true,
      value: null,
    }, {
      type: 'list-topics',
      isCollapsed: true,
      value: null,
    }, {
      type: 'list-icons',
      isCollapsed: true,
      value: null,
    }
  ]

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if(this.data){
      console.log(this.data)
    }
  }

  addComponent(component: any) {
    this.activeModal.close(component);
  }

  btnClick(func: any){
    // @ts-ignore
    this[func]();
  }

  confirm() {
    this.activeModal.close();
  }

  close() {
    this.activeModal.close(null);
  }

}
