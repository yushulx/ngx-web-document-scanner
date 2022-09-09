import { Component, OnInit } from '@angular/core';
import { NgxDocumentScannerService } from 'ngx-web-document-scanner';

@Component({
  selector: 'app-camera-capture',
  templateUrl: './camera-capture.component.html',
  styleUrls: ['./camera-capture.component.css']
})
export class CameraCaptureComponent implements OnInit {
  mrzResult: string = '';
  constructor(private DocumentScannerService: NgxDocumentScannerService) {
  }

  ngOnInit(): void {
  }

  // result = [originalValue, parsedValue]
  onResultReady(result: any): void {
    this.mrzResult = "";
    for (let i in result[1]) {
      this.mrzResult += i + ": " + result[1][i] + '\n';
    }
    // this.mrzResult = result[0];
  }
}
