import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { WebTwain } from 'dwt/dist/types/WebTwain';
import Dynamsoft from 'dwt';

@Component({
  selector: 'ngx-scanner-capture',
  templateUrl: './ngx-scanner-capture.component.html',
  styleUrls: ['./ngx-scanner-capture.component.css'],
})
export class NgxScannerCaptureComponent implements OnInit {
  dwtObject: WebTwain | undefined;
  selectSources: HTMLSelectElement | undefined;
  containerId = 'dwtcontrolContainer';
  @Input() useLocalService: boolean;
  constructor() { 
    this.useLocalService = true;
  }

  ngOnInit(): void {
    Dynamsoft.DWT.Containers = [{ WebTwainId: 'dwtObject', ContainerId: this.containerId, Width: '300px', Height: '400px' }];
    Dynamsoft.DWT.RegisterEvent('OnWebTwainReady', () => { this.Dynamsoft_OnReady(); });
    Dynamsoft.DWT.Load();
  }

  Dynamsoft_OnReady(): void {
    this.dwtObject = Dynamsoft.DWT.GetWebTwain(this.containerId);
    Dynamsoft.DWT.UseLocalService = this.useLocalService;
    if (!this.useLocalService) {
      this.dwtObject.Viewer.cursor = "pointer";
    } else {
      let sources = this.dwtObject.GetSourceNames();
      this.selectSources = <HTMLSelectElement>document.getElementById("sources");
      this.selectSources.options.length = 0;
      for (let i = 0; i < sources.length; i++) {
        this.selectSources.options.add(new Option(<string>sources[i], i.toString()));
      }
    }
  }

  acquireImage(): void {
    if (!this.dwtObject)
      this.dwtObject = Dynamsoft.DWT.GetWebTwain();
    if (!this.useLocalService) {
      alert("Scanning is not supported under the WASM mode!");
    }
    else if (this.dwtObject.SourceCount > 0 && this.selectSources && this.dwtObject.SelectSourceByIndex(this.selectSources.selectedIndex)) {
      const onAcquireImageSuccess = () => { if (this.dwtObject) this.dwtObject.CloseSource(); };
      const onAcquireImageFailure = onAcquireImageSuccess;
      this.dwtObject.OpenSource();
      this.dwtObject.AcquireImage({}, onAcquireImageSuccess, onAcquireImageFailure);
    } else {
      alert("No Source Available!");
    }
  }
  
  openImage(): void {
    if (!this.dwtObject)
      this.dwtObject = Dynamsoft.DWT.GetWebTwain('dwtcontrolContainer');
    this.dwtObject.IfShowFileDialog = true;
    this.dwtObject.Addon.PDF.SetConvertMode(Dynamsoft.DWT.EnumDWT_ConvertMode.CM_RENDERALL);
    this.dwtObject.LoadImageEx("", Dynamsoft.DWT.EnumDWT_ImageType.IT_ALL,
      () => {
        //success
      }, () => {
        //failure
      });
  }
}
