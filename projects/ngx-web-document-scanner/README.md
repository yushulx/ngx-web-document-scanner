# Angular Mrz Sdk

Ngx-mrz-sdk is an Angular MRZ recognition module built with [Dynamic Web TWAIN](https://www.npmjs.com/package/dynamsoft-label-recognizer) and [Dynamsoft Camera Enhancer](https://www.npmjs.com/package/dynamsoft-camera-enhancer).


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
          dceResourcePath: "assets/dynamsoft-camera-enhancer", 
          dlrResourcePath: "assets/dynamsoft-label-recognizer"}),
      ],
      ...
    })
    ```

    - `licenseKey`: get the license key of Dynamic Web TWAIN from [Dynamsoft customer portal](https://www.dynamsoft.com/customer/license/trialLicense?product=dlr).
    - `dceResourcePath` and `dlrResourcePath`: configure the static resources in `angular.json`, and set the output path:

        ```json
        "build": {
            "builder": "@angular-devkit/build-angular:browser",
            ...
            "assets": [
                "src/favicon.ico",
                "src/assets",
                {
                  "glob": "**/*",
                  "input": "./node_modules/dynamsoft-label-recognizer/dist",
                  "output": "assets/dynamsoft-label-recognizer"
                },
                {
                  "glob": "**/*",
                  "input": "./node_modules/dynamsoft-camera-enhancer/dist",
                  "output": "assets/dynamsoft-camera-enhancer"
                }
              ],
            ...
        }
        ```

3. Generate a new component and inject the `NgxDocumentScannerService` in *.ts file:

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

4. Include `ngx-scanner-capture` or `ngx-camera-capture` in HTML file:
    - `<ngx-scanner-capture>`: a component to scan MRZ from image files.
    - `<ngx-camera-capture>`: a component to scan MRZ from a video stream.

5. Set the **properties**:
    - result: an array including the recognized MRZ characters and the extracted information.
    - showOverlay: a boolean value indicating whether to show the overlay.
    
    For example:

    ```html
    <ngx-camera-capture (result)="onResultReady($event)" [showOverlay]="true"></ngx-camera-capture>
    ```
  

    

## Sample Code
[https://github.com/yushulx/ngx-web-document-scanner/tree/main/src/app](https://github.com/yushulx/ngx-web-document-scanner/tree/main/src/app)        

![Angular MRZ scanner](https://camo.githubusercontent.com/1a3c8b09077184eb67d8b0c2ae60ece67976e55f711fb76307249ddf899adc02/68747470733a2f2f7777772e64796e616d736f66742e636f6d2f636f6465706f6f6c2f696d672f323032322f30382f616e67756c61722d6d727a2d7363616e6e65722e706e67)