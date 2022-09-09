import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { NgxScannerCaptureComponent } from './ngx-scanner-capture/ngx-scanner-capture.component';
import { NgxCameraCaptureComponent } from './ngx-camera-capture/ngx-camera-capture.component';
import { DocumentScannerServiceConfig } from './ngx-web-document-scanner.service';

@NgModule({
  declarations: [
    NgxScannerCaptureComponent,
    NgxCameraCaptureComponent
  ],
  imports: [
  ],
  exports: [
    NgxScannerCaptureComponent,
    NgxCameraCaptureComponent
  ]
})
export class NgxDocumentScannerModule { 
  constructor(@Optional() @SkipSelf() parentModule?: NgxDocumentScannerModule) {
    if (parentModule) {
      throw new Error(
        'GreetingModule is already loaded. Import it in the AppModule only');
    }
  }

  static forRoot(config: DocumentScannerServiceConfig): ModuleWithProviders<NgxDocumentScannerModule> {
    return {
      ngModule: NgxDocumentScannerModule,
      providers: [
        { provide: DocumentScannerServiceConfig, useValue: config }
      ]
    };
  }
}
