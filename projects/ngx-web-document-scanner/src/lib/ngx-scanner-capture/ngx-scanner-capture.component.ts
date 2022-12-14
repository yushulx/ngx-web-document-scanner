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
  @Input() containerId = '';
  @Input() useLocalService = false;
  @Input() width = '600px';
  @Input() height = '600px';
  constructor() { 
  }

  ngOnDestroy() {
    Dynamsoft.DWT.Unload();
  }

  ngOnInit(): void {
    Dynamsoft.DWT.Containers = [{ ContainerId: this.containerId, Width: this.width, Height: this.height }];
    Dynamsoft.DWT.UseLocalService = this.useLocalService;
    Dynamsoft.DWT.Load();
    Dynamsoft.DWT.RegisterEvent('OnWebTwainReady', () => { this.onReady(); });
  }

  onReady(): void {
    this.dwtObject = Dynamsoft.DWT.GetWebTwain(this.containerId);
    
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

    let elem = document.getElementById('scanner-capture');
    if (elem) elem.hidden = false;
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

  downloadDocument() {
    if (this.dwtObject) {
      this.dwtObject.SaveAsJPEG("document.jpg", this.dwtObject.CurrentImageIndexInBuffer);
    }
  }
}
