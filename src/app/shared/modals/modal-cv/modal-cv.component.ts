import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-modal-budget',
  standalone: true,
  imports: [],
  templateUrl: './modal-cv.component.html',
  styleUrls: ['./modal-cv.component.css']
})
export class ModalCvComponent implements OnInit {

  @Input() public title: any;
  @Input() public data: any;
  @Input() public btns: any;

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
    if(this.data){
      console.log(this.data)
    }
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
