# Angular Web Document Scanner Sdk

Ngx-web-document-scanner is an Angular document scanning module built with [Dynamic Web TWAIN](https://www.dynamsoft.com/web-twain/overview/).


## Usage
1. Install the Angular library:

  ```bash
  npm install ngx-web-document-scanner --save
  ``` 

2. Import the module in `app.module.ts`:

    ```typescript
    import { NgxDocumentScannerModule } from 'ngx-web-document-scanner';

    @NgModule({
      ...
      imports: [
        BrowserModule,
        AppRoutingModule,
        NgxDocumentScannerModule.forRoot({ 
      licenseKey: "LICENSE-KEY", 
      resourcePath: "assets/dynamic-web-twain"}),
      ],
      ...
    })
    ```

    - `licenseKey`: get the license key of Dynamic Web TWAIN from [Dynamsoft customer portal](https://www.dynamsoft.com/customer/license/trialLicense?product=dwt).
    - `resourcePath`: configure the static resources in `angular.json`:

        ```json
        "build": {
            "builder": "@angular-devkit/build-angular:browser",
            ...
            "assets": [
                "src/favicon.ico",
                "src/assets",
                {
                  "glob": "**/*",
                  "input": "./node_modules/dwt/dist",
                  "output": "assets/dynamic-web-twain"
                }
              ],
            ...
        }
        ```

3. Generate a new component and inject the `NgxDocumentScannerService` in `*.ts` file:

    ```bash
    ng generate component foo
    ```

    ```typescript
    import { Component, OnInit } from '@angular/core';
    import { NgxDocumentScannerService } from 'ngx-web-document-scanner';

    @Component({
      selector: 'app-foo',
      templateUrl: './foo.component.html',
      styleUrls: ['./foo.component.css']  
    })
    export class FooComponent implements OnInit {
      constructor(private DocumentScannerService: NgxDocumentScannerService) {
      }

      ngOnInit(): void {
      }
    }

    ```

4. In `*.html` file, create an HTML element as the image container and add an Angular component. There are three components in the module:
    - `<ngx-scanner-capture>`: capture document images from a scanner.

        ```html
        <div id="container">
          <div id="dwtcontrolContainer"></div>
        </div>

        <ngx-scanner-capture [useLocalService]="true" [containerId]="'dwtcontrolContainer'"
        [width]="'600px'" [height]="'600px'"></ngx-scanner-capture>
        ```
    - `<ngx-camera-capture>`: capture document images from a camera. An extra HTML element is required for the camera preview.

        ```html
        <div id="container">
          <div id="dwtcontrolContainer"></div>
        </div>

        <ngx-camera-capture [useLocalService]="false" [containerId]="'dwtcontrolContainer'"
        [width]="'600px'" [height]="'600px'" [previewId]="'preview'"
        ></ngx-camera-capture>

        <div id="preview"></div>
        ```
    - `<ngx-document-scanner>`: capture document images from a camera and do image processing: edge detection, image cropping, perspective correction and image enhancement.

        ```html
        <div id="container">
          <div id="dwtcontrolContainer"></div>
        </div>

        <ngx-scanner-capture [useLocalService]="true" [containerId]="'dwtcontrolContainer'"
        [width]="'600px'" [height]="'600px'"></ngx-scanner-capture>
        ```


## Sample Code
[https://github.com/yushulx/ngx-web-document-scanner/tree/main/src/app](https://github.com/yushulx/ngx-web-document-scanner/tree/main/src/app)        

![Angular web document scanner](https://www.dynamsoft.com/codepool/img/2022/09/angular-document-scanner-sdk.png)