import { Component, OnInit } from '@angular/core';
import { NgxDocumentScannerService } from 'ngx-web-document-scanner';

@Component({
  selector: 'app-scanner-capture',
  templateUrl: './scanner-capture.component.html',
  styleUrls: ['./scanner-capture.component.css']
})
export class ScannerCaptureComponent implements OnInit {
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
