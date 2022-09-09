import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScannerCaptureComponent } from './scanner-capture/scanner-capture.component';
import { CameraCaptureComponent } from './camera-capture/camera-capture.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { NgxDocumentScannerModule } from 'ngx-web-document-scanner';

@NgModule({
  declarations: [
    AppComponent,
    ScannerCaptureComponent,
    CameraCaptureComponent,
    ProductListComponent,
    TopBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxDocumentScannerModule.forRoot({ 
      licenseKey: "LICENSE-KEY", 
      resourcePath: "assets/dynamic-web-twain"}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
