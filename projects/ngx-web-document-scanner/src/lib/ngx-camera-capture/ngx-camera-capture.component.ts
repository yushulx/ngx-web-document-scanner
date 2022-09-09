import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WebTwain } from 'dwt/dist/types/WebTwain'; 

@Component({
  selector: 'ngx-camera-capture',
  templateUrl: './ngx-camera-capture.component.html',
  styleUrls: ['./ngx-camera-capture.component.css']
})
export class NgxCameraCaptureComponent implements OnInit {
  @Input() showOverlay: boolean;
  isLoaded = false;
  overlay: HTMLCanvasElement | undefined;
  context: CanvasRenderingContext2D | undefined;
  cameraInfo: any = {};
  videoSelect: HTMLSelectElement | undefined;

  @Output() result = new EventEmitter<any>();

  constructor() {
    this.showOverlay = true;
  }

  ngOnInit(): void {
    
  }
}
