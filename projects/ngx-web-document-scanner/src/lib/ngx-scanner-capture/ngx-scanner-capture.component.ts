import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { WebTwain } from 'dwt/dist/types/WebTwain'; 

@Component({
  selector: 'ngx-scanner-capture',
  templateUrl: './ngx-scanner-capture.component.html',
  styleUrls: ['./ngx-scanner-capture.component.css'],
})
export class NgxScannerCaptureComponent implements OnInit {
  @Input() showOverlay: boolean;
  isLoaded = false;
  overlay: HTMLCanvasElement | undefined;
  context: CanvasRenderingContext2D | undefined;

  @Output() result = new EventEmitter<any>();

  constructor() {
    this.showOverlay = true;
   }

  ngOnInit(): void {
  }
}
