import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ImageCroppedEvent, ImageCropperComponent} from 'ngx-image-cropper';
import {ApiInfo} from "../../../../core/http/api-info";
import {FormsModule} from "@angular/forms";
import {DomSanitizer} from "@angular/platform-browser";


@Component({
  selector: 'app-input-photo',
  standalone: true,
  imports: [FormsModule, ImageCropperComponent],
  templateUrl: './input-photo.component.html',
  styleUrls: ['./input-photo.component.scss']
})
export class InputPhotoComponent implements OnInit {

  component: any;

  croppedImage: any = '';
  profile_img: string;
  img_base64: any = ''

  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  selectedFile: File | undefined = undefined;
  uploadSuccess: boolean = false;
  uploadError: boolean = false;
  imageName: string | null = null;

  @Output() itemEvent = new EventEmitter<string>();

  constructor(private api: ApiInfo, private sanitizer: DomSanitizer) {
    this.profile_img = this.api.apiURL + '/images/user.jpg';
    this.component = {
      value: '',
      round: false,
      align_value: 1
    };
  }

  imageCropped(event: ImageCroppedEvent) {
    if (event.objectUrl != null) {
      this.croppedImage = this.sanitizer.bypassSecurityTrustUrl(event.objectUrl);
      this.img_base64 = event.blob
    }
    this.setData()
  }
  // imageLoaded(image: HTMLImageElement) {
  //   // show cropper
  // }
  imageLoaded(image: any) {
    // show cropper
  }
  cropperReady() {
    // cropper ready
  }
  loadImageFailed() {
    // show message
  }

  // Handler for file input change
  onFileChange(event: any): void {
    console.log(event)
    const file = event.target.files[0] as File | null;
    this.uploadFile(file);
  }

  // Handler for file drop
  onFileDrop(event: DragEvent): void {
    console.log(event)
    event.preventDefault();
    const file = event.dataTransfer?.files[0] as File | null;
    this.uploadFile(file);
  }

  // Prevent default dragover behavior
  onDragOver(event: DragEvent): void {
    event.preventDefault();
  }

  // Method to handle file upload
  uploadFile(file: File | null): void {
    if (file && file.type.startsWith('image/')) {
      this.selectedFile = file;
      this.imageName = file.name;

      // const reader = new FileReader();
      // reader.onload = (e) => {
      //   console.log(e.target?.result as string)
      // };
      // reader.readAsDataURL(file);

      this.uploadSuccess = true;
      this.uploadError = false;
    } else {
      this.uploadSuccess = false;
      this.uploadError = true;
    }
  }

  // Method to remove the uploaded image
  removeImage(): void {
    this.selectedFile = undefined;
    this.croppedImage = ''
    this.img_base64 = ''
    this.uploadSuccess = false;
    this.uploadError = false;
  }

  setData(){
    const reader = new FileReader();
    reader.onload = (e) => {
      const base64 = reader.result as string;
      const data: any = {
        value: base64,
        round: this.component.round,
        align_value: this.component.align_value
      }
      this.itemEvent.emit(data);
    };
    if(this.img_base64){
      console.log(this.img_base64)
      reader.readAsDataURL(this.img_base64)
    }
  }

  ngOnInit(): void {
  }

}
