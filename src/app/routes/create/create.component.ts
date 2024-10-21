import {AfterViewInit, Component, OnInit} from '@angular/core';
import {CvApiService} from '../../core/http/cv-api.service';
import {DomSanitizer, SafeHtml, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDropList,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import {LayoutService} from './templates/layout.service';
import {CommonModule} from "@angular/common";
import {DragScrollComponent} from "ngx-drag-scroll";
import {InputPhotoComponent} from "./components/input-photo/input-photo.component";
import {InputTextComponent} from "./components/input-text/input-text.component";
import {InputListSkillsComponent} from "./components/input-list-skills/input-list-skills.component";
import {InputListTopicsComponent} from "./components/input-list-topics/input-list-topics.component";
import {InputListIconsComponent} from "./components/input-list-icons/input-list-icons.component";
import {NgbCollapse, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {InputSimpleTextComponent} from "./components/input-simple-text/input-simple-text.component";
import {ModalCvComponent} from "../../shared/modals/modal-cv/modal-cv.component";
import {ModalComponentsComponent} from "../../shared/modals/modal-components/modal-components.component";
import {catchError, Observable, of} from "rxjs";


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    CommonModule,
    DragScrollComponent,
    InputPhotoComponent,
    InputTextComponent,
    InputListSkillsComponent,
    InputListTopicsComponent,
    InputListIconsComponent,
    CdkDropList,
    CdkDrag,
    CdkDragHandle,
    NgbCollapse,
    InputSimpleTextComponent
  ],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  stateCreation = 0;
  imgWlayouts = 0;
  imgHlayouts = 0;
  imgHlayoutsCont = 0;

  url: any;
  htmlSrc!: SafeResourceUrl;
  loading = false

  layoutcv = {
    type: '',
    columns: [{
      tab: 0,
      components: [{
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
      }]
    },{
      tab: 1,
      components: []
    }],
  };

  tab = 0;

  constructor(
    private apiService: CvApiService,
    public sanitizer: DomSanitizer,
    private modalService: NgbModal,
    private layout: LayoutService) {
    console.log(this.layoutcv);
  }

  changeTemplate(template: any){
    this.layoutcv.type = template;
  }

  selectTemplate(){
    this.stateCreation = 1;
    this.getTemplateRender();
  }

  drop(event: CdkDragDrop<any[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    }
  }

  openModalComponents(tab: number){
    const modalEvent = this.modalService.open(ModalComponentsComponent,  { centered: true, size: 'md', });
    modalEvent.componentInstance.title = "CV Components";
    modalEvent.componentInstance.btns = [{text: "Close", click: "close"}];
    modalEvent.result.then((result) => {
      if(result){
        // console.log("confirm")
        console.log(result)
        this.layoutcv.columns[tab].components.push(result)
      } else {
        console.log("no confirm")
      }
    }).catch((error) => {
      // console.log(error);
    });
  }
  removeComponent(index: number){
    this.layoutcv.columns[this.tab].components.splice(index, 1)
  }

  openModalCV(){
    const modalEvent = this.modalService.open(ModalCvComponent,  { centered: true, size: 'md', });
    modalEvent.componentInstance.data = this.htmlSrc;
    modalEvent.result.then((result) => {
      if(result){
        // console.log("confirm")
      } else {
        console.log("no confirm")
      }
    }).catch((error) => {
      // console.log(error);
    });
  }

  async getTemplateRender(){
    const toPDF: any[] = [];
    this.loading = true
    this.apiService.renderPDF(this.layoutcv).pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      // console.log('There was an error!', error.error);
      this.loading = false
      return of();
    })).subscribe(cv_url => {
      // this.url = await this.apiService.renderPDF(this.layoutcv);
      // console.log(this.url);
      // console.log(this.url);
      // this.htmlSrc = this.sanitizer.bypassSecurityTrustHtml(this.url);
      // this.htmlSrc = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,'+ this.url);
      // this.htmlSrc = 'data:image/jpg;base64,' + this.url;
      this.loading = false
      this.htmlSrc = 'data:image/jpg;base64,' + cv_url;
    });
  }

  async getPDF(){
    this.loading = true;
    this.apiService.getPDF(this.layoutcv).pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      // console.log('There was an error!', error.error);
      this.loading = false
      return of();
    })).subscribe(cv_url => {
      this.loading = false
      const linkSource = 'data:application/pdf;base64,' + cv_url;
      const downloadLink = document.createElement('a');
      const fileName = 'CV.pdf';
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    });
  }

  addValue(component: any, data: any){
    component.value = data;
    console.log(this.layoutcv);
  }

  ngOnInit(): void {
    // console.log(window.innerHeight);
    const w = window.innerWidth;
    let contWidth;
    let nSlides;
    if (w < 576){
      contWidth = window.innerWidth;
      nSlides = 3;
    }
    if (w >= 576){
      contWidth = 540;
      nSlides = 2;
    }
    if (w >= 768){
      contWidth = 720;
      nSlides = 2;
    }
    if (w >= 992){
      contWidth = 960;
      nSlides = 3;
    }
    if (w >= 1200){
      contWidth = 1140;
      nSlides = 3;
    }
    // console.log(contWidth);
    // @ts-ignore
    this.imgWlayouts = (contWidth / nSlides) - 20;
    this.imgHlayouts = ((this.imgWlayouts * 842) / 595)
    this.imgHlayoutsCont = this.imgHlayouts + 60;
  }

  protected readonly event = event;
}
