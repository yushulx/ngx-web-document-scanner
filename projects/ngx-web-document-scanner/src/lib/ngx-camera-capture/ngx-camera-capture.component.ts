import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { WebTwain } from 'dwt/dist/types/WebTwain';
import Dynamsoft from 'dwt';

@Component({
  selector: 'ngx-camera-capture',
  templateUrl: './ngx-camera-capture.component.html',
  styleUrls: ['./ngx-camera-capture.component.css']
})
export class NgxCameraCaptureComponent implements OnInit {
  dwtObject: WebTwain | undefined;
  videoSelect: HTMLSelectElement | undefined;
  sourceDict: any = {};
  @Input() containerId = '';
  @Input() useLocalService = true;
  @Input() width = '600px';
  @Input() height = '600px';
  @Input() previewId = '';

  constructor() {
  }

  ngOnDestroy() {
    Dynamsoft.DWT.Unload();
  }

  ngOnInit(): void {
    this.videoSelect = document.querySelector('select#videoSource') as HTMLSelectElement;
    Dynamsoft.DWT.Containers = [{ ContainerId: this.containerId, Width: this.width, Height: this.height }];
    Dynamsoft.DWT.UseLocalService = this.useLocalService;
    Dynamsoft.DWT.Load();
    Dynamsoft.DWT.RegisterEvent('OnWebTwainReady', () => { this.onReady(); });
  }

  openCamera() {
    if (this.videoSelect) {
      let index = this.videoSelect.selectedIndex;
      if (index < 0) return;

      var option = this.videoSelect.options[index];
      if (this.dwtObject) {
        this.dwtObject.Addon.Camera.selectSource(this.sourceDict[option.text]).then(camera => {
          if (this.videoSelect) this.createCameraScanner(this.sourceDict[option.text]);
        });
      }
    }

  }

  async captureDocument() {
    if (this.dwtObject) {
      await this.dwtObject.Addon.Camera.capture();
    }
  }
  async downloadDocument() {
    if (this.dwtObject) {
      this.dwtObject.SaveAsJPEG("document.jpg", this.dwtObject.CurrentImageIndexInBuffer);
    }
  }

  onReady() {
    this.dwtObject = Dynamsoft.DWT.GetWebTwain(this.containerId);
    this.updateCameraList();
    let elem = document.getElementById('camera-capture');
    if (elem) elem.hidden = false;
  }

  async createCameraScanner(deviceId: string): Promise<void> {
    if (this.dwtObject) {
      await this.dwtObject.Addon.Camera.closeVideo();
      await this.dwtObject.Addon.Camera.play(document.getElementById(this.previewId) as HTMLDivElement);
    }
  }

  updateCameraList() {
    if (this.videoSelect && this.dwtObject) {
      this.videoSelect.options.length = 0;
      this.dwtObject.Addon.Camera.getSourceList().then((list) => {
        for (var i = 0; i < list.length; i++) {
          var option = document.createElement('option');
          option.text = list[i].label || list[i].deviceId;
          if (list[i].label) {
            this.sourceDict[list[i].label] = list[i].deviceId;
          }
          else {
            this.sourceDict[list[i].deviceId] = list[i].deviceId;
          }
          if (this.videoSelect) this.videoSelect.options.add(option);
        }

      });
    }
  }
}
