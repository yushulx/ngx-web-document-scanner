import { Injectable, Optional } from '@angular/core';
import Dynamsoft from 'dwt';

export class DocumentScannerServiceConfig {
  licenseKey = '';
  resourcePath = '';
}

@Injectable({
  providedIn: 'root'
})

export class NgxDocumentScannerService {

  constructor(@Optional() config?: DocumentScannerServiceConfig) { 
    if (config) { 
      Dynamsoft.DWT.ProductKey = config.licenseKey;
      Dynamsoft.DWT.ResourcesPath = config.resourcePath;
    }
  }
}
