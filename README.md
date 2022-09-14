# Angular Document Scanner

This project demonstrates how to build an Angular web document scanner library with [Dynamic Web TWAIN](https://www.dynamsoft.com/web-twain/overview/).

## Development Environment

```bash
ng --version

Angular CLI: 13.3.7
Node: 16.13.1
Package Manager: npm 8.1.2
OS: win32 x64

Angular: 13.3.10
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1303.7
@angular-devkit/build-angular   13.3.7
@angular-devkit/core            13.3.7
@angular-devkit/schematics      13.3.7
@angular/cli                    13.3.7
@schematics/angular             13.3.7
ng-packagr                      13.3.1
rxjs                            7.5.5
typescript                      4.6.4

```


## Dev and Debug the Angular Library Project
1. Install the dependencies:
    
    ```bash
    npm install
    ```
2. The `ngx-web-document-scanner` is located in `projects/ngx-web-document-scanner`. Add the `--watch` flag to run the incremental build as a background process:

    ```bash
    ng build ngx-web-document-scanner --watch
    ```

3. Apply for a [30-day free trial license](https://www.dynamsoft.com/customer/license/trialLicense?product=dwt) and update the license key in `app.module.ts` file:
    
    ```typescript
    NgxMrzSdkModule.forRoot({ 
      licenseKey: "LICENSE-KEY", 
      resourcePath: "assets/dynamic-web-twain"}),
    ```
    
4. `HTTPS` is required for web camera access. Run the Angular application as follows:
    
    ```bash
    ng serve --ssl
    ```

    ![Angular web document scanner](https://www.dynamsoft.com/codepool/img/2022/09/angular-document-scanner-sdk.png)

## Publish the Angular Library Project

```bash
ng build ngx-web-document-scanner
cd dist/ngx-web-document-scanner
npm publish
```
